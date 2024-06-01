const express = require("express");
const router = express.Router();
const {
  doSubscribed,
  getSubscribedChannelVideos,
} = require("../controllers/subscription.controller");

router.route("/doSubcribed").post(doSubscribed);
router
  .route("/subscribedchannel/videos/:userId")
  .get(getSubscribedChannelVideos);

module.exports = router;
