const { Schema, model, Types } = require("mongoose");

const BlogDbSchema = new Schema({
  web_link: { type: String, required: true },
  title: { type: String, required: true, index: true },
  cTime: { type: String, required: true },
  key: { type: String, required: true },
  public: { type: Boolean, required: true, default: false },
  user: { type: Types.ObjectId, required: true, ref: "user" },
});

const Blog = model("blog", BlogDbSchema);

module.exports = { Blog };
