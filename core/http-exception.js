/*
 * @Author: lixingda
 * @Desc: 继承Error基类，开发异常处理方法
 * @Date: 2019-06-08 15:36:47
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-07-02 23:32:45
 */
class HttpException extends Error {
  constructor(msg = "服务器异常", errorCode = 10001, code = 400, success) {
    // 调用基类的构造函数
    super();
    this.msg = msg;
    this.errorCode = errorCode;
    this.code = code;
    this.success = success;
  }
}
class ParameterException extends HttpException {
  constructor(msg, errorCode, code) {
    super();
    this.msg = msg || "参数错误";
    this.code = 400;
    this.errorCode = errorCode || 10001;
    this.success = false;
  }
}
// 成功的回调
class Success extends HttpException {
  constructor(msg, errorCode, code) {
    super();
    this.msg = msg || "ok";
    this.code = code || 201;
    this.errorCode = errorCode || 0;
    this.success = true;
  }
}
// 验证获取token的合法性
class AuthFailed extends HttpException {
  constructor(msg, errorCode, code) {
    super();
    this.msg = msg || "授权失败";
    this.code = 401;
    this.errorCode = errorCode || 10004;
    this.success = false;
  }
}
// 验证token是否合法的异常信息
class Forbbiden extends HttpException {
  constructor(msg, errorCode, code) {
    super();
    this.msg = msg || "禁止访问";
    this.code = 403;
    this.errorCode = errorCode || 10006;
    this.success = false;
  }
}
// 验证是否已经点赞
class LikeError extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.msg = msg || "你已经点过赞了";
    this.code = 400;
    this.errorCode = errorCode || 60001;
    this.success = true;
  }
}
// 验证是否已经取消点赞
class DisLikeError extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.msg = msg || "你已取消点过赞";
    this.code = 400;
    this.errorCode = errorCode || 60002;
    this.success = true;
  }
}

module.exports = {
  HttpException,
  ParameterException,
  Success,
  AuthFailed,
  Forbbiden,
  LikeError,
  DisLikeError
};
