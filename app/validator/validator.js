/*
 * @Author: lixingda
 * @Desc: 基于LinValidator构建的整数校验
 * @Date: 2019-06-08 16:50:32
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-06-11 22:10:07
 */
const { LinValidator, Rule } = require("../../core/lin-validator-v2");
const { User } = require("../models/user");
const { LoginType } = require("../lib/enum");
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
    this.email = [new Rule("isEmail", "请输入正确的email")];
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

  /**
   *自定义验证方法必须validate开头
   *
   * @param {*} vals
   * @memberof RegisterValidator
   */
  validatePassword(vals) {
    const password1 = vals.body.password1;
    const password2 = vals.body.password2;
    if (password1 !== password2) {
      //LinValidator会自动捕捉所有的异常
      throw new Error("两个密码必须相同");
    }
  }

  /**
   *自定义email的验证是否是唯一的
   * @param {*} vals
   * @memberof RegisterValidator
   */
  async validateEmail(vals) {
    const emailVal = vals.body.email;
    // 因为返回的是Promise,所以用await直接求值
    const userData = await User.findOne({
      // where是条件，key是数据库中的字段
      where: {
        email: emailVal
      }
    });
    if (userData) {
      throw new Error("email已存在");
    }
  }
}

/**
 *token的验证器
 * @class TokenValidator
 * @extends {LinValidator}
 */
class TokenValidator extends LinValidator {
  constructor() {
    super();
    this.account = [
      new Rule("isLength", "账号不符合规范", { min: 4, max: 32 })
    ];
    // 因为登陆的时候可能不需要密码，比如令牌，小程序等
    // 可为空或者不为空
    this.secret = [
      // isOptional是LinValidator里的验证函数,定义后可以规定字段为空或者不为空等
      // 如果secret有值，就必须遵守isOptional下面的其他Rule
      new Rule("isOptional"),
      new Rule("isLength", "账号不符合规范", { min: 6, max: 128 })
    ];
  }
  validateLoginType(vals) {
    if (!vals.body.type) {
      throw new Error("type是必传参数");
    }
    if (!LoginType.isThisType(vals.body.type)) {
      throw new Error("type参数不合法");
    }
  }
}
/**
 * 验证token效验接口是否合规
 */
class NotEmptyValidator extends LinValidator {
  constructor() {
    super();
    this.token = [new Rule("isLength", "token不允许为空", { min: 1 })];
  }
}
module.exports = {
  PositiveIntegerValidator,
  RegisterValidator,
  TokenValidator,
  NotEmptyValidator
};
