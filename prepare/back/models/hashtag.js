module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define(
    "Hashtag",
    {
      //MySQL에는 HASHTAGS 테이블 생성
      // id 기본적으로 들어있음.
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4", // 이모티콘 넣을 시 mb4 추가
      collate: "utf8mb4_general_ci", // 한글 저장
    },
  );
  Hashtag.associate = (db) => {};
  return Hashtag;
};
