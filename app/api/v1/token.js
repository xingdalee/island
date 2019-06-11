const Router = require("koa-router");
const { TokenValidator } = require("../../validator/validator");
const router = new Router({
  prefix: "/v1" // 自动给所有的请求加上前缀
});
router.post("/token", async (ctx, next) => {
  // 守门员
  const v = await new TokenValidator().validate(ctx);
//   const insterUserData = {
//     email: v.get("body.email"),
//     nickname: v.get("body.nickname"),
//     password: v.get("body.password1")
//   };
//   await User.create(insterUserData);
  throw new global.errs.Success();
});
module.exports = router;
