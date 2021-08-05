const { Router } = require("express");
const imageRouter = Router();
const Image = require("../models/Image");
const { upload } = require("../middleware/imageUpload");

// 서버에서 app.use("/images", imageRouter); 로 넘겨주기떄문에 /images가 가인 / 로 넘겨준다
// 이미지 업로드
imageRouter.post("/", upload.single("image"), async (req, res) => {
  const image = await new Image({
    key: req.file.filename,
    originalFileName: req.file.originalname
  }).save();
  res.json(image);
  // console.log(req.file);
});

//사진정보 가져오기
imageRouter.get("/", async (req, res) => {
  const images = await Image.find();
  res.json(images);
});

module.exports = { imageRouter };