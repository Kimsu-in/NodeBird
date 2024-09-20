const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");

const { User, Post } = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

const router = express.Router();

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // 미들웨어 확장
    if (err) {
      // 서버 에러
      console.error(err);
      return next(err);
    }
    if (info) {
      // 클라이언트 에러
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      //사용자 정보 보내줌
      if (loginErr) {
        // passport error
        console.error(loginErr);
        return next(loginErr);
      }
      // res.setHeader('Cookie', 'cxlhy')
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: { exclude: ["password"] },
        include: [
          {
            model: Post,
          },
          {
            model: User,
            as: "Followings",
          },
          {
            model: User,
            as: "Followers",
          },
        ],
      });
      return res.status(200).json(fullUserWithoutPassword); // 성공했으니 사용자 정보 프론트로 넘겨주기
    });
  })(req, res, next);
});

router.post("/logout", isLoggedIn, (req, res, next) => {
  req.logout(() => {
    res.send("ok");
  });
});

router.post("/", isNotLoggedIn, async (req, res, next) => {
  // POST /user/
  try {
    const exUser = await User.findOne({
      // email 중복체크
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send("이미 사용 중인 아이디입니다.");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10); // 비밀번호 hash화 (보통 10~13) 컴퓨터 성능에 따라 다르게 설정해야 함. 높을수록 오래걸림.
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.status(201).send("ok"); // 201 - 잘 생성되었을 때
  } catch (error) {
    console.error(error);
    next(error); // error를 한방에 보냄 status(500)
  }
});

module.exports = router;
