/*
 * @Author: lixingda
 * @Desc: 基于LinValidator构建的整数校验
 * @Date: 2019-06-08 16:50:32
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-06-10 21:15:30
 */
const { LinValidator, Rule } = require("../../core/lin-validator");
class PositiveIntegerValidator extends LinValidator {
  constructor() {
    super();
    // isInt等参数具体参考开源库Validator.js文档
    this.id = [new Rule("isInt", "需要正整数", { min: 1 })];
  }
}
class RegisterValidator extends LinValidator {
  constructor() {
    super();
    // isInt等参数具体参考开源库Validator.js文档
    this.emmail = [new Rule("isEmail", "请输入正确的email")];
    this.password1 = [
      new Rule("isLength", "密码至少6位，最多32位", { mix: 6, max: 32 }),
      new Rule(
        "matches",
        "密码至少八个字符，至少一个字母和一个数字",
        "^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]"
      )
    ];
    this.password2 = this.password1;
    this.nickname = [
      new Rule("isLength", "昵称不符合规范", { min: 4, max: 32 })
    ];
  }
  // 自定义验证方法必须validator开头
  validatorPassword(vals) {
    const password1 = vals.body.password1;
    const password2 = vals.body.password2;
    if (password1 !== password2) {
      //LinValidator会自动捕捉所有的异常
      throw new Error("两个密码必须相同");
    }
  }
}
module.exports = { PositiveIntegerValidator, RegisterValidator };
