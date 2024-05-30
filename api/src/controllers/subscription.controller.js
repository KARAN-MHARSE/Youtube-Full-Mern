const { ApiError } = require("../utils/ApiError");
const { AsyncHandler } = require("../utils/AsyncHandler");
const Subscription = require("../models/subcription.model");

const doSubscribed = AsyncHandler(async (req, res) => {
  const { ownerId, currentUserId } = req.body;
  // console.log(ownerId)

  // const alreadySubscribed = await Subscription({})
  const doSubscribe = await Subscription.create({
    subscriber: currentUserId,
    channel: ownerId,
  });

  res.json({ doSubscribe });
});

module.exports = { doSubscribed };
