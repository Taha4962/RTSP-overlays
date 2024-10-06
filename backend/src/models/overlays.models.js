const mongoose = require("mongoose");

const overlaySchema = new mongoose.Schema({
  content: String, // Text or logo URL
  position: {
    top: Number,
    left: Number,
  },
  size: {
    width: Number,
    height: Number,
  },
});

module.exports = mongoose.model("Overlay", overlaySchema);
