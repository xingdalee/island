/*
 * @Author: lixingda
 * @Desc: 定义业务相关的model
 * @Date: 2019-06-28 20:55:39
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-06-28 21:57:13
 */
// 实例
const { sequelize } = require("../../core/db");
// 类
const { Sequelize, Model } = require("sequelize");
const classicFields = {
  image: Sequelize.STRING,
  content: Sequelize.STRING,
  pubdate: Sequelize.DATEONLY,
  fav_nums: Sequelize.INTEGER,
  title: Sequelize.STRING,
  type: Sequelize.TINYINT
};

/**
 *视频
 * @class Movie
 * @extends {Model}
 */
class Movie extends Model {}
Base.init(classicFields, {
  sequelize,
  tableName: "movie"
});

/**
 * 句子
 * @class Sentence
 * @extends {Model}
 */
class Sentence extends Model {}
Base.init(classicFields, {
  sequelize,
  tableName: "sentence"
});

/**
 * 音乐
 * @class Music
 * @extends {Model}
 */
class Music extends Model {}
const musicFields = Object.assign({ url: Sequelize.STRING }, classicFields);
Base.init(musicFields, {
  sequelize,
  tableName: "music"
});

module.exports = {
  Movie,
  Sentence,
  Music
};
