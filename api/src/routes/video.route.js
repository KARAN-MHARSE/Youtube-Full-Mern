const express = require("express");
const router = express.Router();
const {
  uploadVideo,
  getAllVideos,
  getVideoById,
  doComment,
  getVideoComments,
  addWatchVideo,
  Trial,
  searchVideos,
} = require("../controllers/video.controller");
const { upload } = require("../middlewares/multer");
const { verifyJwt } = require("../middlewares/auth.middleware");

router.route("/upload").post(
  verifyJwt,
  upload.fields([
    {
      name: "videoUrl",
      maxCount: 1,
    },
    {
      name: "thumbnailUrl",
      maxCount: 1,
    },
  ]),
  // upload.single('thumbnailUrl'),
  uploadVideo
);

router.route("/trial").post(
  upload.fields([
    {
      name: "videoUrl",
      maxCount: 1,
    },
    {
      name: "thumbnailUrl",
      maxCount: 1,
    },
  ]),
  Trial
);

router.route("/getAllVideos").get(getAllVideos);
router.route("/getVideos/search/:search").get(searchVideos);
router.route("/getVideoByID/:videoId").post(getVideoById).post(doComment);
router.route("/getVideoByID/doComment/:videoId").post(doComment);
router.route("/getVideoByID/getComment/:videoId").get(getVideoComments);
router.route("/getVideoByID/watchVideo/:videoId").post(addWatchVideo);

// http://localhost:6060/api/v1/user/video/getVideoByID/watchVideo/662fb4bd172f35e74558a9a5

// router.route('/getVideo/:videoId').get(karan)

module.exports = router;
