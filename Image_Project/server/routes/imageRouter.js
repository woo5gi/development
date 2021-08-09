const { Router } = require("express");
const imageRouter = Router();
const Image = require("../models/Image");
const { upload } = require("../middleware/imageUpload");
const fs = require("fs");
const { promisify } = require("util");
const fileUnlink = promisify(fs.unlink)
const mongoose = require("mongoose");
// const { s3, getSignedUrl } = require("../aws");
// const { v4: uuid } = require("uuid");
// const mime = require("mime-types");

// 서버에서 app.use("/images", imageRouter); 로 넘겨주기떄문에 /images가 가인 / 로 넘겨준다
// 이미지 업로드
imageRouter.post("/", upload.single("image"), async (req, res) => {
  // 유저정보,public 유무확인
  try {
    if(!req.user) throw new Error("/ 권한이 없습니다.")
    const image = await new Image({
      user: {
        _id: req.user.id,
        name: req.user.name,
        username: req.user.username,
      },
      public: req.body.public,
      key: req.file.filename,
      originalFileName: req.file.originalname
    }).save();
    res.json(image);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

//사진정보 가져오기
imageRouter.get("/", async (req, res) => {
  //public한 이미지만 제공
  const images = await Image.find({public:true});
  res.json(images);
});

imageRouter.delete("/:imageId", async (req, res) => {
  // 유저 권한 확인
  // 사진 삭제
  // 1.업로드 폴더 사진삭제
  // 2.데이터베이스 사진삭제
  try {
    if (!req.user) throw new Error("권한이 없습니다.");    
    if (!mongoose.isValidObjectId(req.params.imageId))
      throw new Error("올바르지 않은 이미지id입니다.");
    //await fileUnlink("./uploads/test.jpeg")

    const image = await Image.findOneAndDelete({ _id: req.params.imageId });
    if (!image)
      return res.json({ message: "요청하신 사진은 이미 삭제되었습니다." });
      await fileUnlink(`./uploads/${image.key}`);
    // s3.deleteObject(
    //   { Bucket: "image-upload-tutorial", Key: `raw/${image.key}` },
    //   (error) => {
    //     if (error) throw error;
    //   }
    // );
    res.json({ message: "요청하신 이미지가 삭제되었습니다.", image });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

imageRouter.patch("/:imageId/like", async (req, res) => {
  // 유저 권한 확인
  // like 중복 안되도록 확인
  try {
    if (!req.user) throw new Error("권한이 없습니다.");
    if (!mongoose.isValidObjectId(req.params.imageId))
      throw new Error("올바르지 않은 imageId입니다.");
    const image = await Image.findOneAndUpdate(
      { _id: req.params.imageId },
      //업데이트된거받기
      { $addToSet: { likes: req.user.id } },
      { new: true }
    );
    res.json(image);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

  imageRouter.patch("/:imageId/unlike", async (req, res) => {
  // 유저 권한 확인
  // like 중복 취소 안되도록 확인
  try {
    if (!req.user) throw new Error("권한이 없습니다.");
    if (!mongoose.isValidObjectId(req.params.imageId))
      throw new Error("올바르지 않은 imageId입니다.");
    const image = await Image.findOneAndUpdate(
      { _id: req.params.imageId },
      //업데이트된거받기
      { $pull: { likes: req.user.id } },
      { new: true }
    );
    res.json(image);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
  });

module.exports = { imageRouter };