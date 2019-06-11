/*
 * @Author: lixingda
 * @Desc: 继承Error基类，开发异常处理方法
 * @Date: 2019-06-08 15:36:47
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-06-11 22:35:10
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

class AuthFailed extends HttpException {
  constructor(msg, errorCode, code) {
    super();
    this.msg = msg || "授权失败";
    this.code = 401;
    this.errorCode = errorCode || 10004;
    this.success = false;
  }
}
module.exports = { HttpException, ParameterException, Success, AuthFailed };
