const Sequelize = require("sequelize");
const sequelize = new Sequelize("NodeKoa2", "root", "", {
  // 使用mysql必须安装mysql2驱动
  dialect: "mysql",
//   host: "192.168.64.2",
  host: "192.168.64.2",
  port: 3306,
  logging: true, // 是否在控制台显示sql
  timezone: "+08:00" // 设置时区，北京时间
});

// 同步，将模型创建到数据库中
sequelize.sync();
module.exports = {
  db: sequelize
};
