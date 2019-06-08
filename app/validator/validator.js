/*
 * @Author: lixingda
 * @Desc: 基于LinValidator构建的整数校验
 * @Date: 2019-06-08 16:50:32
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-06-08 17:27:26
 */
const { LinValidator, Rule } = require("../../core/lin-validator");
class PositiveIntegerValidator extends LinValidator {
  constructor() {
    super();
    this.id = [new Rule("isInt", "需要正整数", { min: 1 })];
  }
}
module.exports = { PositiveIntegerValidator };
