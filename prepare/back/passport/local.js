const passport = require("passport");
const { Stratege: LocalStrategy } = require("passport-local");
const bcrypt = require("bcrypt");
const { User } = require("../models");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({
            where: { email },
          });
          if (!user) {
            return done(null, false, { reason: "존재하지 않는 이메일입니다!" }); // 서버 에러, 성공여부, 클라이언트 에러
          }
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            return done(null, user); // 성공하면 사용자 정보 넘겨주기
          }
          return done(null, false, { reason: "비밀번호가 틀렸습니다." });
        } catch (error) {
          console.error(error);
          return done(error);
        }
      },
    ),
  );
};
