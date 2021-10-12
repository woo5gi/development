const express = require("express");
const app = express();
const { userRouter, blogRouter } = require("./routes");
// const { userRouter } = require("./routes/userRoute");
// const { blogRouter } = require("./routes/blogRoute");
// const { commentRouter } = require("./routes/commentRoute");
const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://admin:1477@cluster0.y1pbj.mongodb.net/mongoDatabase?retryWrites=true&w=majority";
// let result = mongoose.connect(MONGO_URI).then(result => console.log({ result }))
// console.log({ result })

const server = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    });
    //   let mongodbConnection = await mongoose.connect(MONGO_URI);
    // console.log({ mongodbConnection })
    mongoose.set("debug", true);
    console.log("mongodb conneected");
    app.use(express.json());

    app.use("/user", userRouter);
    app.use("/blog", blogRouter);
    // app.use("/blog/:blogId/comment", commentRouter);

    app.listen(3000, () => console.log("server listening on port 3000"));
  } catch (err) {
    console.log(err);
  }
};
server();
