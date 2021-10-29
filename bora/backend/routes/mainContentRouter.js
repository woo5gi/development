const { Router } = require("express");
const mainContentRouter = Router();
const { MainContent, User, Comment } = require("../models");
const { mainContentUpload } = require("../middleware");
const fs = require("fs");
const { promisify } = require("util");
const fileUnlink = promisify(fs.unlink);
const mongoose = require("mongoose");
// const { s3, getSignedUrl } = require("../aws");
// const { v4: uuid } = require("uuid");
// const mime = require("mime-types");

const { commentRouter } = require("./commentRouter");

mainContentRouter.use("/:mainContentId/comment", commentRouter);

// 서버에서 app.use("/mainContents", mainContentRouter); 로 넘겨주기떄문에 /mainContents가 가인 / 로 넘겨준다
// 이미지 업로드
mainContentRouter.post(
  "/",
  mainContentUpload.array("mainContent", 30),
  async (req, res) => {
    // 유저정보,public 유무확인
    try {
      if (!req.user) throw new Error("/ 권한이 없습니다.");
      const mainContents = await Promise.all(
        req.files.map(async (file) => {
          const mainContent = await new MainContent({
            user: {
              _id: req.user.id,
              name: req.user.name,
              username: req.user.username,
            },
            public: req.body.public,
            key: file.filename,
            // originalFileName: file.originalname,
            web_link: req.body.web_link,
            title: req.body.title,
            mainText: req.body.mainText,
            category: req.body.category,
          }).save();
          return mainContent;
        })
      );
      res.json(mainContents);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    }
  }
);

//사진정보 가져오기
mainContentRouter.get("/posts", async (req, res) => {
  try {
    const { lastid } = req.query;
    if (lastid && !mongoose.isValidObjectId(lastid))
      throw new Error("invalid lastid");
    //public한 이미지만 제공
    const mainContents = await MainContent
      .find
      // lastid
      // ? {
      //     public: true,
      //     _id: { $lt: lastid },
      //   }
      // : { public: true }
      ()
      .sort({ _id: -1 })
      .limit(30);
    res.json(mainContents);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

//이미지 한장씩 불러오기 수정
mainContentRouter.get("/:mainContentId", async (req, res) => {
  try {
    const { mainContentId } = req.params;
    if (!mongoose.isValidObjectId(mainContentId))
      throw new Error("올바르지 않는 이미지id입니다.");
    const mainContent = await MainContent.findOne({ _id: mainContentId });
    if (!mainContent) throw new Error("해당 이미지는 존재 하지 않습니다.");
    // if (
    //   !mainContent.public &&
    //   (!req.user || req.user.id !== mainContent.user.id)
    // )
    // throw new Error("권한이 없습니다.");
    res.json(mainContent);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

mainContentRouter.delete("/:mainContentId", async (req, res) => {
  // 유저 권한 확인
  // 사진 삭제
  // 1.업로드 폴더 사진삭제
  // 2.데이터베이스 사진삭제
  try {
    if (!req.user) throw new Error("권한이 없습니다.");
    if (!mongoose.isValidObjectId(req.params.mainContentId))
      throw new Error("올바르지 않은 이미지id입니다.");
    //await fileUnlink("./uploads/test.jpeg")

    const mainContent = await MainContent.findOneAndDelete({
      _id: req.params.mainContentId,
    });
    if (!mainContent)
      return res.json({ message: "요청하신 사진은 이미 삭제되었습니다." });
    await fileUnlink(`./uploads/${mainContent.key}`);
    // s3.deleteObject(
    //   { Bucket: "mainContent-upload-tutorial", Key: `raw/${mainContent.key}` },
    //   (error) => {
    //     if (error) throw error;
    //   }
    // );
    res.json({ message: "요청하신 이미지가 삭제되었습니다.", mainContent });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

mainContentRouter.patch("/:mainContentId/like", async (req, res) => {
  // 유저 권한 확인
  // like 중복 안되도록 확인
  try {
    // if (!req.user) throw new Error("권한이 없습니다.");
    if (!mongoose.isValidObjectId(req.params.mainContentId))
      throw new Error("올바르지 않은 mainContentId입니다.");
    const mainContent = await MainContent.findOneAndUpdate(
      { _id: req.params.mainContentId },
      //업데이트된거받기
      { $addToSet: { likes: req.user.id } },
      { new: true }
    );
    res.json(mainContent);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

mainContentRouter.patch("/:mainContentId/unlike", async (req, res) => {
  // 유저 권한 확인
  // like 중복 취소 안되도록 확인
  try {
    if (!req.user) throw new Error("권한이 없습니다.");
    if (!mongoose.isValidObjectId(req.params.mainContentId))
      throw new Error("올바르지 않은 mainContentId입니다.");
    const mainContent = await MainContent.findOneAndUpdate(
      { _id: req.params.mainContentId },
      //업데이트된거받기
      { $pull: { likes: req.user.id } },
      { new: true }
    );
    res.json(mainContent);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

mainContentRouter.patch("/:mainContentId", async (req, res) => {
  const { mainContentId } = req.params;
  const { mainText, title, category } = req.body;
  if (typeof mainText !== "string")
    return res.status(400).send({ err: "mainText is required" });

  const [mainContent] = await Promise.all([
    MainContent.findOneAndUpdate(
      { _id: mainContentId },
      { mainText, title, category },
      { new: true }
    ),
    MainContent.updateOne(
      { "mainContent._id": mainContentId },
      { "mainContent.$[]": mainText, title, category }
    ),
  ]);

  return res.send({ mainContent });
});

module.exports = { mainContentRouter };
