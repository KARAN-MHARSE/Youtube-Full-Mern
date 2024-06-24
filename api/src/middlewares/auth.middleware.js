const { ApiError } = require("../utils/ApiError");
const { AsyncHandler } = require("../utils/AsyncHandler");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const verifyJwt = AsyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      throw new ApiError(401, "Unauthorised user");
    }

    const decodedToken = jwt.verify(
      token,
      process.env.REFRESH_TOKEN_SECRET_KEY
    );

    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken -watchVideos"
    );
    if (!user) {
      throw new ApiError(401, "Unauthorised user");
    }
    req.user = user;

    next();
  } catch (error) {}
});

module.exports = { verifyJwt };
