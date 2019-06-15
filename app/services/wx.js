/*
 * @Author: lixingda
 * @Desc: 专门用于处理微信小程序的方法
 * @Date: 2019-06-15 20:46:07
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-06-15 22:48:29
 */
// util是nodejs提供的工具方法
const util = require("util");
const wxConfig = require("../../wxConfig.js");
const axios = require("axios");
const { User } = require("../models//user");
const { generateToken } = require("../../core/util");
const { Auth } = require("../../middlewares/auth");
class WXManager {
  static async codeToToken(code) {
    // format会将占位符替换成后面的参数
    const url = util.format(
      wxConfig.loginUrl,
      wxConfig.appId,
      wxConfig.appSecret,
      code
    );
    const result = await axios.get(url);
    if (result.status !== 200) {
      throw new global.errs.AuthFailed("openid获取失败");
    }
    const errcode = result.data.errcode;
    if (errcode) {
      throw new global.errs.AuthFailed("openid获取失败" + errcode);
    }
    const openId = result.data.openid;
    let userData = await User.getUserByOpenid(openId);
    if (!userData) {
      userData = await User.registerByOpenid(openId);
    }
    return generateToken(userData.id, Auth.USER);
  }
}
module.exports = {
  WXManager
};
