const { sequelize } = require("../../core/db");
const { Sequelize, Model } = require("sequelize");

class User extends Model {}
User.init(
  {
    // INTEGER和STRING等和mysql的数据类型对应
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true, // 是否是主键
      autoIncrement: true // 自动增长
    },
    nickname: Sequelize.STRING,
    email: {
      type: Sequelize.STRING(128),
      unique: true // 是否唯一
    },
    password: Sequelize.STRING,
    openid: {
      type: Sequelize.STRING(64),
      unique: true // 是否唯一
    }
  },
  {
    sequelize,
    tableName: "user"
  }
);
module.exports = {
  User
};
