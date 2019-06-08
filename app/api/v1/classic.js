const Router = require("koa-router");
const router = new Router();
const { HttpException } = require("../../../core//HttpException");
router.post("/v1/classic/latest", (ctx, next) => {
  const body = ctx.request.body;
  ctx.body = { key: "v1book" };
  throw new HttpException("错误啦", 10001, 400);
});
module.exports = router;
