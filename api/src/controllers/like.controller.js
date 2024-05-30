const { AsyncHandler } = require("../utils/AsyncHandler");
const { ApiError } = require("../utils/ApiError");
const Like = require("../models/like.model");

const doLike = AsyncHandler(async (req, res) => {
  const { videoId } = req.params;
  const { userId } = req.body;
  console.log(userId);

  if (!videoId || !userId) {
    throw new ApiError(400, "all fields are required");
  }
  const previousRecord = await Like.findOne({
    videoId,
    likedBy: userId,
  });
  if (previousRecord) {
    await Like.findByIdAndDelete(previousRecord._id);
    return res.json({ success: true, message: "Unliked Succesfully" });
  }
  const newRecord = await Like.create({
    videoId,
    likedBy: userId,
  });
  res.status(201).json({ success: true, message: "Liked Succesfully" });
});

module.exports = { doLike };
