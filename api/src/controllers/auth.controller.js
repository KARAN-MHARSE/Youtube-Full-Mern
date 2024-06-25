const { AsyncHandler } = require("../utils/AsyncHandler");
const { ApiError } = require("../utils/ApiError");
const User = require("../models/user.model");
const { ObjectId } = require("mongoose").Types;

const register = AsyncHandler(async (req, res) => {
  const { fullName, userName, email, password } = req.body;
  const profile = userName.charAt(0).toUpperCase();
  if (
    [fullName, userName, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ userName, email }],
  });
  if (existedUser) {
    throw new ApiError(409, "User is already registered");
  }

  // Upload user image to the cloudinary

  // upload data to mongo
  const user = await User.create({
    fullName,
    userName,
    email,
    password,
    profile,
  });

  res.status(201).json({
    success: true,
    user,
  });
});

const login = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // console.log(email)

  if (!email) {
    throw new ApiError(400, "credentials are required");
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiError(404, "Invalid credentials");
  }

  const isPswdCorrect = await user.isPasswordCorrect(password);
  if (!isPswdCorrect) {
    throw new ApiError(401, "Invalid credentials");
  }

  const token = await user.generateRefreshToken();
  user.refreshToken = token;
  await user.save({ validateBeforeSave: false });

  const loggedUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true, // Makes the cookie inaccessible to JavaScript on the client side
    secure: true, // Set to true if your site is served over HTTPS
    sameSite: 'None',
    maxAge: 5 * 24 * 60 * 60 * 1000, // Cookie will expire in 1 day (24 hours)
  };
  res.status(200).cookie("token", token).json({
    success: true,
    user: loggedUser,
  });
});

const getUserDetail = AsyncHandler(async (req, res) => {
  const userId = req.user._id;

  if (!userId) {
    throw new ApiError(400, "please login first");
  }

  const user = await User.aggregate([
    {
      $match: {
        _id: new ObjectId(userId),
      },
    },
    {
      $unwind: {
        path: "$watchVideos",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: "videos",
        localField: "watchVideos.video",
        foreignField: "_id",
        as: "watchVideos.video",
      },
    },
    {
      $unwind: {
        path: "$watchVideos.video",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $group: {
        _id: "$_id",
        userName: { $first: "$userName" },
        email: { $first: "$email" },
        fullName: { $first: "$fullName" },
        profile: { $first: "$profile" },
        watchVideos: { $addToSet: "$watchVideos.video" },
      },
    },
    {
      $lookup: {
        from: "subscriptions",
        localField: "_id",
        foreignField: "channel",
        as: "subscriptions",
      },
    },
  ]);

  if (!user) {
    throw new ApiError(400, "please login first");
  }

  res.status(200).json({
    success: true,
    user,
  });
});

module.exports = { register, login, getUserDetail };
