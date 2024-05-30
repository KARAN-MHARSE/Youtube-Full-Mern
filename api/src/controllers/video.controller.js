const { AsyncHandler } = require("../utils/AsyncHandler");
const { ApiError } = require("../utils/ApiError");
const { uploadOnCloudinary } = require("../utils/cloudinary");
const { uploadToFirebase } = require("../utils/FirebaseUpload");
const Video = require("../models/video.model");
const User = require("../models/user.model");
const { ObjectId } = require("mongoose").Types;

const uploadVideo = AsyncHandler(async (req, res) => {
  const { title, description, owner } = req.body;

  if ([title, description].some((field) => field.trim() == "")) {
    throw new ApiError(404, "All fields are required");
  }

  const videoLocalPath = req.files?.videoUrl[0].path;
  const thumbnailLocalPath = req.files?.thumbnailUrl[0].path;

  if (!videoLocalPath && !thumbnailLocalPath) {
    throw new ApiError(404, "Thumbnail and video files are required");
  }

  const videoUrl1 = await uploadOnCloudinary(videoLocalPath);
  const thumbnailUrl1 = await uploadOnCloudinary(thumbnailLocalPath);

  console.log(videoUrl1);
  videoUrl = videoUrl1.url;
  thumbnailUrl = thumbnailUrl1.url;
  // console.log(videoUrl)
  // console.log(thumbnailUrl)

  const video = await Video.create({
    title,
    description,
    videoUrl,
    thumbnailUrl,
    owner,
  });

  if (!video) {
    throw new ApiError(500, "Something went wrong");
  }
  res.status(201).json({
    success: true,
    video,
    error: false,
  });
});

const getAllVideos = AsyncHandler(async (req, res) => {
  const video = await Video.find({});

  res.status(200).json({
    success: true,
    video,
    error: false,
  });
});

const getVideoById = AsyncHandler(async (req, res) => {
  const { videoId } = req.params;
  const { currentUser } = req.body;
  console.log(req.body);

  const videoData = await Video.aggregate([
    {
      $match: {
        _id: new ObjectId(videoId),
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "owner",
        foreignField: "_id",
        as: "result",
      },
    },
    {
      $lookup: {
        from: "subscriptions",
        localField: "owner",
        foreignField: "channel",
        as: "subscribers",
      },
    },
    {
      $addFields: {
        email: { $arrayElemAt: ["$result.email", 0] },
        userName: { $arrayElemAt: ["$result.userName", 0] },
        profile: { $arrayElemAt: ["$result.profile", 0] },
        ownerID: { $arrayElemAt: ["$result._id", 0] },
        totalSubscribers: { $size: "$subscribers" },
        // isSubscribed: {
        //   $cond: {
        //     // if:{$in:[]}
        //   },
        // },
      },
    },
    {
      $project: {
        title: 1,
        description: 1,
        thumbnailUrl: 1,
        videoUrl: 1,
        createdAt: 1,
        views: 1,
        _id: 1,
        ownerID: 1,
        email: 1,
        userName: 1,
        profile: 1,
        totalSubscribers: 1,
        isSubscribed: 1,
      },
    },
  ]);
  // console.log(videoData[0])

  const video = await Video.findById(videoId);
  res.status(200).json({
    success: true,
    video: videoData[0],
    error: false,
  });
});

const doComment = AsyncHandler(async (req, res) => {
  const { videoId } = req.params;
  const { commentBy, comment } = req.body;
  console.log(req.body);

  if (!commentBy) {
    throw new ApiError(404, "Unauthorized user");
  }

  const video = await Video.findByIdAndUpdate(
    videoId,
    {
      $push: {
        comments: {
          commentBy,
          comment,
        },
      },
    },
    { new: true }
  );

  if (!video) {
    throw new ApiError(400, "video does not exist");
  }

  // video.comments.push({commentBy,comment})
  // await video.save()

  res.status(201).json({
    success: true,
    video,
    error: false,
  });
});

const getVideoComments = AsyncHandler(async (req, res) => {
  const { videoId } = req.params;

  // const video = await Video.aggregate(
  //   [
  //     {
  //       $match: {
  //         _id:ObjectId(videoId)
  //       }
  //     },
  //     {
  //       $lookup: {
  //         from: 'users',
  //         localField: 'comments.commentBy',
  //         foreignField: '_id',
  //         as: 'result'
  //       }
  //     },
  //     {
  //       $unwind: '$result'
  //     },
  //     {
  //       $addFields: {
  //         'comments.userName': '$result.userName',
  //         'comments.userEmail': '$result.email'
  //       }
  //     },
  //     {
  //       $project: {
  //         result:0
  //       }
  //     }
  //   ]
  // )

  const video = await Video.findById(videoId);
  if (!video) {
    throw new ApiError(400, "Video aur comment is not availabale");
  }

  res.status(200).json({
    success: true,
    comments: video.comments,
  });
});

const addWatchVideo = AsyncHandler(async (req, res) => {
  console.log(req.params);
  const { videoId } = req.params;
  const { currentUserId } = req.body;

  if (!currentUserId) {
    throw new ApiError(400, "user not sign in");
  }

  const user = await User.findByIdAndUpdate(
    currentUserId,
    {
      $push: {
        watchVideos: {
          video: videoId,
        },
      },
    },
    { new: true }
  );

  res.status(201).json({
    success: true,
    user,
  });
});

// Trial is for uploading video
const Trial = AsyncHandler(async (req, res) => {
  // Trial is for uploading video
  const { title, description, owner } = req.body;

  if ([title, description, owner].some((field) => field.trim() == "")) {
    throw new ApiError(400, "all fields are required");
  }

  const videoLocalPath = req.files?.videoUrl[0];
  const thumbnailLocalPath = req.files?.thumbnailUrl[0];

  if (!videoLocalPath && !thumbnailLocalPath) {
    throw new ApiError(400, "All files are required");
  }

  const videoUrl = await uploadToFirebase(videoLocalPath, "video");
  const thumbnailUrl = await uploadToFirebase(thumbnailLocalPath, "thumbnail");

  const video = await Video.create({
    title,
    description,
    videoUrl,
    thumbnailUrl,
    owner,
  });

  if (!video) {
    throw new ApiError(500, "Something went wrong");
  }
  res.status(201).json({
    success: true,
    video,
    error: false,
  });
});

const searchVideos = AsyncHandler(async (req, res) => {
  const { search } = req.params;
  console.log(search);

  const video = await Video.find({
    title: { $regex: search, $options: "i" },
  });

  res.status(200).json({
    success: true,
    video,
  });
});

module.exports = {
  uploadVideo,
  getAllVideos,
  getVideoById,
  doComment,
  getVideoComments,
  addWatchVideo,
  Trial,
  searchVideos,
};
