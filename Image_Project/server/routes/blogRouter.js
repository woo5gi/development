const { Router } = require("express");
const blogRouter = Router();
const { Blog, User } = require("../models");
const mongoose = require("mongoose");
const { isValidObjectId } = require("mongoose");
const { commentRouter } = require("./commentRouter");

blogRouter.use("/:blogId/comment", commentRouter);

// blogRouter.post("/", async (req, res) => {
//   try {
//     const { content, userId } = req.body;
//     if (typeof content !== "string")
//       res.status(400).send({ err: "content is reguired" });
//     if (!isValidObjectId(userId))
//       res.status(400).send({ err: "userId is invalid" });
//     let user = await User.findById(userId);
//     if (!user) res.status(400).send({ err: "user does not exist" });

//     let blog = new Blog({ ...req.body, user: user });
//     await blog.save();
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send({ err: err.message });
//   }
// });

blogRouter.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find({});
    return res.send({ blogs });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err: err.message });
  }
});
blogRouter.get("/:blogId", async (req, res) => {
  try {
    const { blogId } = req.params;
    if (!isValidObjectId(blogId))
      res.status(400).send({ err: "blogId is invalid" });
    const blog = await Blog.findOne({ _id: blogId });
    return res.send({ blog });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err: err.message });
  }
});

blogRouter.put("/:blogId", async (req, res) => {
  try {
    const { blogId } = req.params;
    if (!isValidObjectId(blogId))
      res.status(400).send({ err: "blogId is invalid" });

    const { title, content } = req.body;
    if (typeof title !== "string")
      res.status(400).send({ err: "tutle is reguired" });
    if (typeof content !== "string")
      res.status(400).send({ err: "content is reguired" });

    const blog = await Blog.findOneAndUpdate(
      { _id: blogId },
      { title, content },
      { new: true }
    );
    return res.send({ blog });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err: err.message });
  }
});

// blogRouter.patch("/:blogId/live", async (req, res) => {
//   try {
//     const { blogId } = req.params;
//     if (!isValidObjectId(blogId))
//       res.status(400).send({ err: "blogId is invalid" });

//     const { islive } = req.body;
//     if (typeof islive !== "boolean")
//       res.status(400).send({ err: "boolean islive is required" });

//     const blog = await Blog.findOneAndUpdate(blogId, { islive }, { new: true });
//     return res.send({ blog });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send({ err: err.message });
//   }
// });
module.exports = {
  blogRouter,
};
