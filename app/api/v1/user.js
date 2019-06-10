const Router = require("koa-router");
const router = new Router({
  prefix: "/v1/user" // 自动给所有的请求加上前缀
});
const { RegisterValidator } = require("../../validator/validator");
router.post("/register", async (ctx, next) => {
  const v = new RegisterValidator().validate(ctx);
  ctx.body = { key: "success" };
});
module.exports = router;
