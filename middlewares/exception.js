/*
 * @Author: lixingda
 * @Desc: 全局异常处理的中间件
 * @Date: 2019-06-08 11:00:39
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-06-08 11:22:12
 */
const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.body = {
      status: false,
      message: error.message
    };
  }
};
module.exports = catchError;
