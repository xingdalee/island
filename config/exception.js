// 必须使用此方法进行异常拦截和消息返回，否则会导致数据无法返回给前端
const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    const { msg, code, success } = error;
    ctx.body = {
      msg,
      code,
      success
    };
  }
};
module.exports = catchError;
