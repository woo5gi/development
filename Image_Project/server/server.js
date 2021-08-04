const express = require("express");
const multer = require('multer');
const { v4: uuid } = require('uuid');
const mime = require("mime-types");

// 이미지 업로드
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb (null, "./uploads"),
  filename: (req, file, cb) => 
  cb(null,`${uuid()}.${mime.extension(file.mimetype)}`),
});

const app = express();
const PORT = 5000;

// 이미지 필터
const upload = multer({
  storage, fileFilter: (req, file, cb) => {
    if(["image/png", "image/jpeg"].includes(file.mimetype)) cb(null,true);
    else cb(new Error("invalid file type"), false);
  },
  limits:{
    fileSize: 1024 * 1024 * 10,
  }
});


// 이미지 파일들 외부로 노출시켜주기
app.use("/uploads",express.static("uploads"));

app.post("/upload", upload.single("iamgeTest"), (req, res) => {
  console.log(req.file);
  res.json(req.file);
})
app.listen(PORT, () => console.log("Express server listening on PORT " + PORT))
