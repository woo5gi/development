const { Schema, model, Types } = require("mongoose");
const { CommentSchema } = require("./Comment");

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    islive: { type: Boolean, required: true, default: false },
    // user: { type: Types.ObjectId, required: true, ref: "user" },
    user: {
      _id: { type: Types.ObjectId, required: true, ref: "user" },
      username: { type: String, required: true },
      name: {
        first: { type: String, required: true },
        last: { type: String, required: true },
      },
    },
    commentsCount: { type: Number, default: 0, required: true },
    //내장
    //부분 Nesting & Pagination을 이용한 고급스러운 API 만들기 시 주석
    comments: [CommentSchema],
  },
  { timestamps: true }
);
// unique 도 줄수있음
BlogSchema.index({ "user._id": 1, updatedAt: 1 });
BlogSchema.index({ title: "text", content: "text" });

// 가상 디비에는 저장 안됨
// BlogSchema.virtual("comments", {
//   ref: "comment",
//   localField: "_id",
//   foreignField: "blog",
// });

// BlogSchema.set("toObject", { virtuals: true });
// BlogSchema.set("toJSON", { virtuals: true });

const Blog = model("blog", BlogSchema);

module.exports = { Blog };
