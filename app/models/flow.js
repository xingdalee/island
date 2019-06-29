/*
 * @Author: lixingda
 * @Desc: 作为中转的model使用
 * @Date: 2019-06-29 14:53:03
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-06-29 15:40:33
 */
const { sequelize } = require("../../core/db");
// 类
const { Sequelize, Model } = require("sequelize");

/**
 *
 * @class Flow
 * @extends {Model}
 */
class Flow extends Model {}

Flow.init(
  {
    index: Sequelize.INTEGER,
    art_id: Sequelize.INTEGER, // 任意一个model的id
    type: Sequelize.INTEGER // 代表其他任意的model
  },
  {
    sequelize,
    tableName: "flow"
  }
);

module.exports = {
  Flow
};
