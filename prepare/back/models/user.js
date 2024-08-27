module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      //MySQL에는 USERS 테이블 생성
      // id 기본적으로 들어있음.
      email: {
        type: DataTypes.STRING(30),
        allowNull: true, // 필수
        unique: true, // 고유한 값
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: true, // 필수
      },
      password: {
        type: DataTypes.STRING(100), // 암호화되기 때문에 넉넉히
        allowNull: true, // 필수
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci", // 한글 저장
    },
  );

  User.associate = (db) => {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    // 다대다는 중간 테이블이 자동으로 생성됨(UserPostTable)
    db.User.belongsToMany(db.Post, { through: "Like", as: "Liked" }); // 다대다 관계, 두번째는 이름, 세번째는 별칭
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followers",
      foreignKey: "FollowingId",
    }); // 같은 모델의 다대다
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followings",
      foreignKey: "FollowerId",
    });
  };
  return User;
};
