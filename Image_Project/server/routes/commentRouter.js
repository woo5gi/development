const { Router } = require("express");
const commentRouter = Router({ mergeParams: true });
const { Blog, User, Comment } = require("../models");
const { isValidObjectId } = require("mongoose");

commentRouter.post("/", async (req, res) => {
  try {
    const { blogId } = req.params;
    const { content, userId } = req.body;

    if (!isValidObjectId(blogId))
      res.status(400).send({ err: "blogId is invalid" });
    if (!isValidObjectId(userId))
      res.status(400).send({ err: "userId is invalid" });
    if (typeof content !== "string")
      res.status(400).send({ err: "content is reguired" });

    const [blog, user] = await Promise.all([
      Blog.findById(blogId),
      User.findById(userId),
    ]);
    // const blog = await Blog.findById(blogId);
    // const user = await User.findById(userId);

    if (!blog || !user)
      return res.status(400).send({ err: "blog or user does not exist" });

    const comment = new Comment({ content, user, blog });
    await comment.save();
    return res.send({ comment });
  } catch (err) {
    return res.status(500).send({ err: err.message });
  }
});

commentRouter.get("/", async (req, res) => {
  const { blogId } = req.params;

  if (!isValidObjectId(blogId))
    res.status(400).send({ err: "blogId is invalid" });

  const comments = new Comment({ blog: blogId });
  return res.send({ comments });
});

module.exports = {
  commentRouter,
};
