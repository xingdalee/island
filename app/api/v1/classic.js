const Router = require("koa-router");
const router = new Router();
const { ParameterException } = require("../../../core//HttpException");
router.post("/v1/classic/latest", (ctx, next) => {
  const body = ctx.request.body;
  ctx.body = { key: "v1book" };
  throw new ParameterException("哎呀，错误啦");
});
module.exports = router;
