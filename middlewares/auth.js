/*
 * @Author: lixingda
 * @Desc: 获取用户token
 * @Date: 2019-06-12 23:10:08
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-06-15 20:34:53
 */
// 使用的是http协议的basicAuth方法，postman在传的时候会自动使用base64加密，所以在前端传的时候需要手动加密
const basicAuth = require("basic-auth");
const jwt = require("jsonwebtoken");
// 中间件
class Auth {
  // level表示api的级别
  constructor(level) {
    this.level = level || 1;
    // 定义类变量，做权限分级，普通用户是小于8的，admin用户是小于16的
    Auth.USER = 8;
    Auth.ADMIN = 16;
  }
  // m是属性,不是函数，在外面取值的时候不能带（）
  get m() {
    // 设置一个中间件
    return async (ctx, next) => {
      // ctx.req获取的是node.js的原生的request对象
      const userToken = basicAuth(ctx.req);
      let errMeg = "token不合法";
      if (!userToken || !userToken.name) {
        throw new global.errs.Forbbiden(errMeg);
      }
      try {
        var decode = jwt.verify(
          userToken.name,
          global.config.security.secretKey
        );
      } catch (error) {
        // token过期
        if (error.name === "TokenExpiredError") {
          errMeg = "token已过期";
        }
        throw new global.errs.Forbbiden(errMeg);
      }
      // 权限拦截
      if (decode.scope < this.level) {
        errMeg = "权限不足";
        throw new global.errs.Forbbiden(errMeg);
      }
      // uid,scope,在后面会用的比较多，存在中间件的上下文中，方便使用
      ctx.auth = {
        uid: decode.uid,
        scope: decode.scope
      };
      await next();
    };
  }
  // 验证token是否合法
  static verifyToken(token) {
    try {
      jwt.verify(
        token,
        global.config.security.secretKey
      );
      return true
    } catch (error) {
      return false
    }
    
  }
}
module.exports = {
  Auth
};
