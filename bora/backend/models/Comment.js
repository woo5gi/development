const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const CommentSchema = new Schema(
  {
    commentContent: { type: String, required: true },
    user: { type: ObjectId, required: true, ref: "user", index: true },
    mainContent: { type: ObjectId, required: true, ref: "mainContent" },
  },
  { timestamps: true }
);

CommentSchema.index({ mainContent: 1, createdAt: -1 });

const Comment = model("comment", CommentSchema);

module.exports = { Comment, CommentSchema };
