const Router = require("koa-router");
const router = new Router();
const { PositiveIntegerValidator } = require("../../validator/validator");
router.post("/v1/:id/classic/latest", (ctx, next) => {
  const v = new PositiveIntegerValidator().validate(ctx);
  ctx.body = { key: "v1book" };
});
module.exports = router;
