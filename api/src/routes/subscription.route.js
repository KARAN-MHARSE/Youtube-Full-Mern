const express = require("express");
const router = express.Router();
const { verifyJwt } = require("../middlewares/auth.middleware");

const {
  doSubscribed,
  getSubscribedChannelVideos,
} = require("../controllers/subscription.controller");

router.route("/doSubcribed").post(doSubscribed);
// router
//   .route("/subscribedchannel/videos/:userId")
//   .get(getSubscribedChannelVideos);

router
  .route("/subscribedchannel/videos/")
  .get(verifyJwt, getSubscribedChannelVideos);
module.exports = router;
