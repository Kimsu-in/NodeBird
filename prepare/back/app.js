const express = require("express");
const cors = require("cors");

const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const db = require("./models");
const passportConfig = require("./passport");

const app = express();
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

passportConfig();

app.use(
  cors({
    origiin: "*",
    credentials: false,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // form data 처리 - req.body에 넣어줌

app.get("/", (req, res) => {
  // 브라우저 주소창은 get요청
  res.send("hello express");
});

app.get("/api/posts", (req, res) => {
  res.json([
    // 응답은 json
    { id: 1, content: "hello1" },
    { id: 2, content: "hello2" },
    { id: 3, content: "hello3" },
  ]);
});

app.use("/post", postRouter);
app.use("/user", userRouter);

app.listen(3065, () => {
  console.log("서버 실행 중...!"); // nodemon 사용하면 바로 반영
});
