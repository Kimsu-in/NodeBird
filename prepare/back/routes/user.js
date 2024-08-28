const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models");
const router = express.Router();

router.post("/", async (req, res, next) => {
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
    res.setHeader("Access-Control-Allow-Origin, http://localhost:3060");
    res.status(201).send("ok"); // 201 - 잘 생성됨
  } catch (error) {
    console.error(error);
    next(error); // error를 한방에 보냄 status(500)
  }
});

module.exports = router;
