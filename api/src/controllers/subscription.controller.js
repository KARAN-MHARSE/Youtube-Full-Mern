const { ApiError } = require("../utils/ApiError");
const { AsyncHandler } = require("../utils/AsyncHandler");
const Subscription = require("../models/subcription.model");
const User = require("../models/user.model");
const { ObjectId } = require("mongoose").Types;

const doSubscribed = AsyncHandler(async (req, res) => {
  const { ownerId, currentUserId } = req.body;
  // console.log(ownerId)

  const alreadySubscribed = await Subscription.findOne({
    subscriber: currentUserId,
    channel: ownerId,
  });
  if (alreadySubscribed) {
    await Subscription.findByIdAndDelete(alreadySubscribed._id);
    return res.json({ success: true, message: "UnSubscribed Succesfully" });
  }

  // const alreadySubscribed = await Subscription({})
  const doSubscribe = await Subscription.create({
    subscriber: currentUserId,
    channel: ownerId,
  });

  return res.json({ success: true, message: "Subscribed Succesfully" });
});

const getSubscribedChannelVideos = AsyncHandler(async (req, res) => {
  const { userId } = req.params;
  console.log(req.user);

  const video = await User.aggregate([
    {
      $match: {
        _id: new ObjectId(req?.user?._id),
      },
    },
    {
      $lookup: {
        from: "subscriptions",
        localField: "_id",
        foreignField: "subscriber",
        as: "r",
      },
    },
    {
      $unwind: {
        path: "$r",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $match: {
        r: { $ne: null },
      },
    },
    {
      $lookup: {
        from: "videos",
        localField: "r.channel",
        foreignField: "owner",
        as: "result",
      },
    },
    {
      $unwind: {
        path: "$result",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "result.owner",
        foreignField: "_id",
        as: "videoOwnerDetails",
      },
    },
    {
      $addFields: {
        "result.ownerName": {
          $arrayElemAt: ["$videoOwnerDetails.userName", 0],
        },
        "result.ownerProfile": {
          $arrayElemAt: ["$videoOwnerDetails.profile", 0],
        },
      },
    },
    {
      $group: {
        _id: "$result",
      },
    },
    {
      $project: {
        result: 1,
      },
    },
  ]);

  if (video.length == 0) {
    throw new ApiError(400, "Please suscribed first");
  }
  res.json({ video });
});
module.exports = { doSubscribed, getSubscribedChannelVideos };
