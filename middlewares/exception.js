/*
 * @Author: lixingda
 * @Desc: 全局异常处理的中间件
 * @Date: 2019-06-08 11:00:39
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-06-08 18:00:40
 */
const { HttpException } = require("../core/http-exception");
const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    if (global.config.environment === "dev") {
      throw error;
    }
    //  已知错误
    if (error instanceof HttpException) {
      ctx.body = {
        msg: error.msg,
        errorCode: error.errorCode,
        request: `${ctx.method} ${ctx.path}`
      };
      ctx.status = error.code;
    } else {
      // 未知错误，如第三方错误
      ctx.body = {
        msg: "😭服务器内部错误",
        errorCode: 999,
        request: `${ctx.method} ${ctx.path}`
      };
      ctx.status = 500;
    }
  }
};
module.exports = catchError;
