module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      //MySQL에는 POSTS 테이블 생성
      // id 기본적으로 들어있음.
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4", // 이모티콘 넣을 시 mb4 추가
      collate: "utf8mb4_general_ci", // 한글 저장
    },
  );
  Post.associate = (db) => {
    db.Post.belongsTo(db.User);
    db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" });
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" }); // 다대다 관계, 두번째는 이름, 세번째는 별칭
    db.Post.belongsTo(db.Post, { as: "Retweet" });
  };
  return Post;
};
