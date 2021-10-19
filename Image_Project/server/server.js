require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { imageRouter } = require("./routes/imageRouter");
const { userRouter } = require("./routes/userRouter");
const { MONGO_URI, PORT } = process.env;
const { authenticate } = require("./middleware/authentication");
const app = express();

mongoose
  .connect(MONGO_URI, {
    // 버전이 6.0이상 이면 안해도 됨
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb connected");

    // 이미지 파일들 외부로 노출시켜주기
    app.use("/uploads", express.static("uploads"));
    // json파일이 있으면 파싱해서 body에 저장
    app.use(express.json());
    app.use(authenticate);
    // /images 로 시작하는 경로는 모두 imageRouter로!
    app.use("/images", imageRouter);
    app.use("/users", userRouter);

    app.listen(PORT, () =>
      console.log("Express server listening on PORT " + PORT)
    );
  })
  .catch((err) => console.log(err));
