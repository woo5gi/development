const mongoose = require("mongoose");

const BlogDbSchema = new mongoose.Schema({
  web_link: { type: String, required: true },
  title: { type: String, required: true, index: true },
  cTime: { type: String, required: true },
  key: { type: String, required: true },
  public: { type: Boolean, required: true, default: false },
});

module.exports = mongoose.model("blog", BlogDbSchema);
