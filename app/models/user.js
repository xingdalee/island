const { sequelize } = require("../../core/db");
const { Sequelize, Model } = require("sequelize");
const bcryptjs = require("bcryptjs");
class User extends Model {
  static async verifyEmailPassWord(email, plainPassWord) {
    const userData = await User.findOne({
      where: {
        email
      }
    });
    if (!userData) {
      throw new global.errs.AuthFailed("账户不存在");
    }
    // 验证传入的密码和数据库中的密码是否相同
    const correct = bcryptjs.compareSync(plainPassWord, userData.password);
    if (!correct) {
      throw new global.errs.AuthFailed("密码错误");
    }
    return userData;
  }
}
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
