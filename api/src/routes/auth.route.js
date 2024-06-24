const express = require("express");
const router = express.Router();
const { upload } = require("../middlewares/multer");
const { verifyJwt } = require("../middlewares/auth.middleware");
const {
  register,
  login,
  getUserDetail,
} = require("../controllers/auth.controller");

router.route("/register").post(upload.single("avatar"), register);
router.route("/login").post(login);
router.route("/getUserDetail").get(verifyJwt, getUserDetail);

module.exports = router;
