const { Schema, model, Types } = require("mongoose");
const { CommentSchema } = require("./Comment");

const MainContentSchema = new Schema(
  {
    user: {
      _id: { type: Types.ObjectId, required: true, index: true },
      name: { type: String, required: true },
      username: { type: String, required: true },
    },
    likes: [{ type: Types.ObjectId }],
    public: { type: Boolean, required: true, default: false },
    key: { type: String, required: true },
    // originalFileName: { type: String, required: true },
    web_link: { type: String },
    title: { type: String },
    mainText: { type: String },
    // cTime: { type: String, required: true },
    category: { type: String },

    commentsCount: { type: Number, default: 0, required: true },
    comments: [CommentSchema],
  },
  { timestamps: true }
);

MainContentSchema.index({ "user._id": 1, updatedAt: 1 });
MainContentSchema.index({ title: "text", mainText: "text" });

const MainContent = model("maincontent", MainContentSchema);

module.exports = { MainContent };
