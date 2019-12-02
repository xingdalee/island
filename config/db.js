const Sequelize = require("sequelize");
const sequelize = new Sequelize("NodeKoa2", "root", "", {
  // 使用mysql必须安装mysql2驱动
  dialect: "mysql",
  //   host: "192.168.64.2",
  host: "192.168.64.2",
  port: 3306,
  logging: true, // 是否在控制台显示sql
  timezone: "+08:00", // 设置时区，北京时间
  define: {
    timestamps: true, // 是否自动加上创建和修改以及删除的时间
    paranoid: true, // 软删除的时间戳
    createdAt: "created_time", // 自定义别名
    updatedAt: "updated_time",
    deletedAt: "deleted_time",
    underscored: false //字段名字转驼峰
  }
});

// 同步，将模型创建到数据库中
sequelize.sync({
  force: true // 如果设置为true，每次都会删除表格并新建
});
module.exports = {
  db: sequelize
};
