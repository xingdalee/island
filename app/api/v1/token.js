const Router = require("koa-router");
const { TokenValidator } = require("../../validator/validator");
const { LoginType } = require("../../lib/enum");
const { User } = require("../../models/user");
const router = new Router({
  prefix: "/v1" // 自动给所有的请求加上前缀
});
router.post("/token", async (ctx, next) => {
  // 守门员
  const v = await new TokenValidator().validate(ctx);
  switch (v.get("body.type")) {
    case LoginType.USER_EMAIL:
      await emailLogin(v.get("body.account"), v.get("body.secret"));
      break;

    default:
      break;
  }
  async function emailLogin(account, secret) {
    const user = await User.verifyEmailPassWord(account, secret);
  }
  throw new global.errs.Success();
});
module.exports = router;
