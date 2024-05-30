const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  videoId: {
    type: String,
    required: true,
  },
  likedBy: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Like", likeSchema);
