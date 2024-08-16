module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      //MySQL에는 IMAGES 테이블 생성
      // id 기본적으로 들어있음.
      src: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      charset: "utf8", // 이모티콘 넣을 시 mb4 추가
      collate: "utf8_general_ci", // 한글 저장
    },
  );
  Image.associate = (db) => {
    db.Image.belongsTo(db.Post);
  };
  return Image;
};
