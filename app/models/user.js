const { sequelize } = require("../../core/db");
const { Sequelize, Model } = require("sequelize");
const bcryptjs = require("bcryptjs");
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
    password: {
      type: Sequelize.STRING,
      set(val) {
        // 数值越大，加密越复杂，消耗的性能也越多
        const salt = bcryptjs.genSaltSync(10);
        const pwd = bcryptjs.hashSync(val, salt);
        // model里的属性操作，这样可以把数据保存到数据库
        this.setDataValue("password", pwd);
      }
    },
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
