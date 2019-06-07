const Router = require("koa-router");
const router = new Router();

router.post("/v1/classic/latest", (ctx, next) => {
  const body = ctx.request.body;
  ctx.body = { key: "v1book" };
});
module.exports = router;
