const { Router } = require("express");
const commentRouter = Router({ mergeParams: true });
const { Blog, User, Comment } = require("../models");
const { isValidObjectId, startSession } = require("mongoose");

commentRouter.post("/", async (req, res) => {
  // const session = await startSession();
  let comment;
  try {
    // await session.withTransaction(async () => {
    const { blogId } = req.params;
    const { content, userId } = req.body;
    if (!isValidObjectId(blogId))
      return res.status(400).send({ err: "blogId is invalid" });
    if (!isValidObjectId(userId))
      return res.status(400).send({ err: "userId is invalid" });
    if (typeof content !== "string")
      return res.status(400).send({ err: "content is required" });

    const [blog, user] = await Promise.all([
      Blog.findById(blogId, {}, {}),
      User.findById(userId, {}, {}),
    ]);
    // const blog = await Blog.findById(blogId);
    // const user = await User.findById(userId);

    if (!blog || !user)
      return res.status(400).send({ err: "blog or user does not exist" });
    if (!blog.islive)
      return res.status(400).send({ err: "blog is not available" });
    comment = new Comment({
      content,
      user,
      userFullName: `${user.name.first} ${user.name.last}`,
      blog: blogId,
    });
    // await session.abortTransaction()

    // 부분 Nesting & Pagination을 이용한 고급스러운 API 만들기 시 주석
    // await Promise.all([
    //   comment.save(),
    //   Blog.updateOne({ _id: blogId }, { $push: { comments: comment } }),
    // ]);
    // blog.commentsCount++;
    // blog.comments.push(comment);
    // if (blog.commentsCount > 3) blog.comments.shift();

    // await Promise.all([
    //   comment.save({}),
    //   blog.save(),
    //   // Blog.updateOne({ _id: blogId }, { $inc: { commentsCount: 1 } }),
    // ]);
    // });

    await Promise.all([
      comment.save(),
      // blog.save(),
      Blog.updateOne(
        { _id: blogId },
        {
          //가공된 값을 내장
          $inc: { commentsCount: 1 },
          $push: { comments: { $each: [comment], $slice: -3 } },
        }
      ),
    ]);

    return res.send({ comment });
  } catch (err) {
    return res.status(400).send({ err: err.message });
  } finally {
    // await session.endSession();
  }
});

commentRouter.get("/", async (req, res) => {
  // 부분 Nesting & Pagination을 이용한 고급스러운 API 만들기 추가
  let { page = 0 } = req.query;
  page = parseInt(page);
  const { blogId } = req.params;
  if (!isValidObjectId(blogId))
    return res.status(400).send({ err: "blogId is invalid" });
  // .sort().skip().limit()추가함
  const comments = await Comment.find({ blog: blogId })
    .sort({ createdAt: -1 })
    .skip(page * 3)
    .limit(3);
  return res.send({ comments });
});

commentRouter.patch("/:commentId", async (req, res) => {
  const { commentId } = req.params;
  const { content } = req.body;
  if (typeof content !== "string")
    return res.status(400).send({ err: "content is required" });

  const [comment] = await Promise.all([
    Comment.findOneAndUpdate({ _id: commentId }, { content }, { new: true }),
    //.$. 는 comments._id 조건에 충족된 데이터가 선택 되는것
    Blog.updateOne(
      { "comments._id": commentId },
      // $ 아닌 $[]면 배열모두 바꿀수있음
      // 배열 안에 하나만 바꿈
      { "comments.$.content": content }
    ),
  ]);

  return res.send({ comment });
});

commentRouter.delete("/:commentId", async (req, res) => {
  const { commentId } = req.params;
  const comment = await Comment.findOneAndDelete({ _id: commentId });
  await Blog.updateOne(
    { "comments._id": commentId },
    { $pull: { comments: { _id: commentId } } }
  );
  return res.send({ comment });
});

module.exports = { commentRouter };
