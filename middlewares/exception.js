/*
 * @Author: lixingda
 * @Desc: 全局异常处理的中间件
 * @Date: 2019-06-08 11:00:39
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-06-08 15:54:07
 */
const { HttpException } = require("../core//HttpException");
const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    if (error instanceof HttpException) {
      ctx.body = {
        msg: error.msg,
        errorCode: error.errorCode,
        request: `${ctx.method} ${ctx.path}`
      };
      ctx.status = error.code;
    }
  }
};
module.exports = catchError;
