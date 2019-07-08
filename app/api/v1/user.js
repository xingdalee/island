const Router = require("koa-router");
const { User } = require("@models");
const router = new Router({
  prefix: "/v1/user" // 自动给所有的请求加上前缀
});
const { RegisterValidator } = require("../../validator/validator");
router.post("/register", async (ctx, next) => {
  // 守门员
  const v = await new RegisterValidator().validate(ctx);
  const insterUserData = {
    email: v.get("body.email"),
    nickname: v.get("body.nickname"),
    password: v.get("body.password1")
  };
  const res = await User.create(insterUserData);
  throw new global.errs.Success();
});
module.exports = router;
