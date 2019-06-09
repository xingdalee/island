/*
 * @Author: lixingda
 * @Desc: 连接数据库
 * @Date: 2019-06-09 19:37:12
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-06-09 20:03:11
 */
// sequelize依赖于mysql2
const { dbName, host, port, user, password } = require("../database");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbName, user, password, {
  host,
  port,
  dialect: "mysql",
  logging: true, // 是否在控制台打印sql日志
  timezone: "+8:00", // 将数据库时间设置为北京时间
  define: {}
});
module.exports = sequelize;
