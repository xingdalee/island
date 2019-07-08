/*
 * @Author: lixingda 
 * @Desc: models的导出
 * @Date: 2019-07-08 22:51:47 
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-07-08 22:52:08
 */
const { Art } = require("./art");
const { Classic } = require("./classic");
const { Favor } = require("./favor");
const { Flow } = require("./flow");
const { User } = require("./user");
module.exports = {
  Flow,
  Classic,
  Art,
  Favor,
  User
};
