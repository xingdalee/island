class httpError extends Error {
  constructor(msg = "服务器异常", code = 400, success) {
    // 调用基类的构造函数
    super();
    this.msg = msg;
    this.code = code;
    this.success = success;
  }
}
module.exports = httpError;
