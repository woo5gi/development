const { Router } = require("express");
const searchRouter = Router();
const Blog = require("../models/Blog");

searchRouter.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find({
      $search: {
        index: "titleSearch",
        text: {
          query: req.query.value,
          path: "title", // 제목날짜 둘다 찾고 싶으면 ['제목', '날짜']
        },
      },
    });
    console.log(blogs);
    res.json(blogs);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }

  // try {
  //   const blogs = await Blog.find(
  //     {
  //       $search: {
  //         index: 'titleSearch',
  //         text: {
  //           query: req.query.value,
  //           path: 'title'  // 제목날짜 둘다 찾고 싶으면 ['제목', '날짜']
  //         }
  //       }
  //     }
  //   );
  //   return res.send({ blogs });
  // } catch (err) {
  //   console.log(err);
  //   return res.status(500).send({ err: err.message });
  // }
});

module.exports = { searchRouter };
