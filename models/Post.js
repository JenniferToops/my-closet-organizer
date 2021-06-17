const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    enum: ['hat', 'accessory', 'top', 'bottom', 'footwear'],
    require: true,
  },
  // season: {
  //   type: String,
  //   require: true,
  // },
  // palette: {
  //   type: String,
  //   require: true,
  // },
  // formal: {
  //   type: String,
  //   require: true,
  // },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
