/*
 * @Author: lixingda
 * @Desc: 连接数据库
 * @Date: 2019-06-09 19:37:12
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-06-09 22:31:52
 */
// sequelize依赖于mysql2
const { dbName, host, port, user, password } = require("../database");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbName, user, password, {
  host,
  port,
  dialect: "mysql",
  logging: true, // 是否在控制台打印sql日志
  timezone: "+08:00", // 将数据库时间设置为北京时间
  define: {
    timestamps: true, // 是否在表中自动生成cerateTime和updateTime这两个字段
    paranoid: true, // 逻辑删除的时候，是否显示删除时间
    createdAt: "created_time", // 自定义创建时间的字段名
    updatedAt: "updated_time", // 自定义修改时间的字段名
    deletedAt: "deleted_time", // 自定义删除时间的字段名
    underscored: true // 把驼峰字段自动转换为下划线
  }
});
// 如果不加，sequelize将不会把user等模型创建到数据库中
sequelize.sync();
module.exports = {
  sequelize
};
