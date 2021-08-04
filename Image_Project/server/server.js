require("dotenv").config();
const express = require("express");
const multer = require('multer');
const { v4: uuid } = require('uuid');
const mime = require("mime-types");
const mongoose = require("mongoose");
const Image = require("./models/Image");


// 이미지 업로드
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads"),
  filename: (req, file, cb) =>
    cb(null, `${uuid()}.${mime.extension(file.mimetype)}`),
});

// 이미지 필터
const upload = multer({
  storage, fileFilter: (req, file, cb) => {
    if (["image/png", "image/jpeg"].includes(file.mimetype)) cb(null, true);
    else cb(new Error("invalid file type"), false);
  },
  limits: {
    fileSize: 1024 * 1024 * 10,
  }
});

const app = express();
const PORT = 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb connected");

    // 이미지 파일들 외부로 노출시켜주기
    app.use("/uploads", express.static("uploads"));
   
    // 이미지 업로드
    app.post("/images", upload.single("image"), async (req, res) => {
     const image = await new Image({ 
        key: req.file.filename, 
        originalFileName: req.file.originalname 
      }).save();
      res.json(image);
      // console.log(req.file);
    });
   
    //사진정보 가져오기
    app.get("/images", async(req,res) => {
      const images = await Image.find();
      res.json(images);
    });
   
    app.listen(PORT, () =>
      console.log("Express server listening on PORT " + PORT)
    );
  }).catch((err) => console.log(err));


