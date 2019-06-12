/*
 * @Author: lixingda
 * @Desc: 获取用户token
 * @Date: 2019-06-12 23:10:08
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-06-12 23:14:28
 */
// 使用的是http协议的basicAuth方法，postman在传的时候会自动使用base64加密，所以在前端传的时候需要手动加密
const basicAuth = require("basic-auth");
class Auth {
  constructor() {}
  // m是属性,不是函数，在外面取值的时候不能带（）
  get m() {
    // 设置一个中间件
    return async (ctx, next) => {
      // ctx.req获取的是node.js的原生的request对象
      const token = basicAuth(ctx.req);
      ctx.body = {
        token
      };
    };
  }
}
module.exports = {
  Auth
};
