const { db } = require("../../config/db");
const { Sequelize, Model } = require("sequelize");

// 面向对象
class User extends Model {}
User.init(
  {
    id: {
      type: Sequelize.INTEGER, // 根据数据库的字段类型来配置
      primaryKey: true, // 是否主键
      autoIncrement: true // 自增长
    },
    name: Sequelize.STRING(11),
    email: Sequelize.STRING
  },
  { sequelize: db }
);
