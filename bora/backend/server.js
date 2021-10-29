require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const { userRouter, mainContentRouter } = require("./routes");
const { MONGO_URI, PORT } = process.env;
const { authenticate } = require("./middleware");
const app = express();

mongoose
  .connect(MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb connected");

    // 이미지 파일들 외부로 노출시켜주기
    app.use("/uploads", express.static("uploads"));
    // json파일이 있으면 파싱해서 body에 저장
    app.use(express.json());
    app.use(authenticate);
    // /images 로 시작하는 경로는 모두 imageRouter로!
    // app.use("/images", imageRouter);
    app.use("/users", userRouter);
    // app.use("/blogs", blogRouter);
    app.use("/bora/blog", mainContentRouter);

    app.listen(PORT, () =>
      console.log("Express server listening on PORT " + PORT)
    );
  })
  .catch((err) => console.log(err));
