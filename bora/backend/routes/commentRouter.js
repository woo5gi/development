const { Router } = require("express");
const commentRouter = Router({ mergeParams: true });
const { MainContent, User, Comment } = require("../models");
const { isValidObjectId, startSession } = require("mongoose");

commentRouter.post("/", async (req, res) => {
  // const session = await startSession();
  let comment;
  try {
    // await session.withTransaction(async () => {
    const { mainContentId } = req.params;
    const { commentContent, userId } = req.body;
    if (!isValidObjectId(mainContentId))
      return res.status(400).send({ err: "mainContentId is invalid" });
    if (!isValidObjectId(userId))
      return res.status(400).send({ err: "userId is invalid" });
    if (typeof commentContent !== "string")
      return res.status(400).send({ err: "commentContent is required" });

    const [mainContent, user] = await Promise.all([
      MainContent.findById(mainContentId, {}, {}),
      User.findById(userId, {}, {}),
    ]);
    // const mainContent = await   MainContent.findById(mainContentId);
    // const user = await User.findById(userId);

    if (!mainContent || !user)
      return res
        .status(400)
        .send({ err: "mainContent or user does not exist" });
    comment = new Comment({
      commentContent,
      user,
      mainContent: mainContentId,
    });
    // await session.abortTransaction()

    // 부분 Nesting & Pagination을 이용한 고급스러운 API 만들기 시 주석
    // await Promise.all([
    //   comment.save(),
    //     MainContent.updateOne({ _id: mainContentId }, { $push: { comments: comment } }),
    // ]);
    // mainContent.commentsCount++;
    // mainContent.comments.push(comment);
    // if (mainContent.commentsCount > 3) mainContent.comments.shift();

    // await Promise.all([
    //   comment.save({}),
    //   mainContent.save(),
    //   //   MainContent.updateOne({ _id: mainContentId }, { $inc: { commentsCount: 1 } }),
    // ]);
    // });

    await Promise.all([
      comment.save(),
      // mainContent.save(),
      MainContent.updateOne(
        { _id: mainContentId },
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
  try {
    let { page = 0 } = req.query;
    page = parseInt(page);
    const { mainContentId } = req.params;
    if (!isValidObjectId(mainContentId))
      return res.status(400).send({ err: "mainContentId is invalid" });
    // .sort().skip().limit()추가함
    const comments = await Comment.find({ mainContent: mainContentId })
      .sort({ createdAt: -1 })
      .skip(page * 3)
      .limit(3);
    return res.send({ comments });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

commentRouter.patch("/:commentId", async (req, res) => {
  const { commentId } = req.params;
  const { commentContent } = req.body;
  if (typeof commentContent !== "string")
    return res.status(400).send({ err: "commentContent is required" });

  const [comment] = await Promise.all([
    Comment.findOneAndUpdate(
      { _id: commentId },
      { commentContent },
      { new: true }
    ),
    //.$. 는 comments._id 조건에 충족된 데이터가 선택 되는것
    MainContent.updateOne(
      { "comments._id": commentId },
      // $ 아닌 $[]면 배열모두 바꿀수있음
      // 배열 안에 하나만 바꿈
      { "comments.$.commentContent": commentContent }
    ),
  ]);

  return res.send({ comment });
});

commentRouter.delete("/:commentId", async (req, res) => {
  const { commentId } = req.params;
  const comment = await Comment.findOneAndDelete({ _id: commentId });
  await MainContent.updateOne(
    { "comments._id": commentId },
    { $pull: { comments: { _id: commentId } } }
  );
  return res.send({ comment });
});

module.exports = { commentRouter };
