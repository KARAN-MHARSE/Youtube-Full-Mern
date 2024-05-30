const express = require("express");
const router = express.Router();
const { doLike } = require("../controllers/like.controller");

router.route("/:videoId").post(doLike);

module.exports = router;
