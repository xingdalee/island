const Router = require("koa-router");
const {
  TokenValidator,
  NotEmptyValidator
} = require("../../validator/validator");
const { LoginType } = require("../../lib/enum");
const { User } = require("@models");
const { generateToken } = require("../../../core/util");
const { Auth } = require("../../../middlewares/auth");
const { WXManager } = require("../../services/wx");
const router = new Router({
  prefix: "/v1" // 自动给所有的请求加上前缀
});
let token;
router.post("/token", async (ctx, next) => {
  // 守门员
  const v = await new TokenValidator().validate(ctx);
  switch (v.get("body.type")) {
    case LoginType.USER_EMAIL:
      token = await emailLogin(v.get("body.account"), v.get("body.secret"));
      break;
    case LoginType.USRE_MINI_PROGRAM:
      token = await WXManager.codeToToken(v.get("body.account"));
      break;
    default:
      break;
  }
  async function emailLogin(account, secret) {
    const user = await User.verifyEmailPassWord(account, secret);
    // 设定当前的接口的权限数字是Auth.USER
    return (token = generateToken(user.id, Auth.USER));
  }
  ctx.body = {
    token
  };
});
/**
 * 验证token是否合法的接口
 */
router.post("/verify", async (ctx, next) => {
  const v = await new NotEmptyValidator().validate(ctx);
  const result = Auth.verifyToken(v.get("body.token"));
  ctx.body = {
    is_valid: result
  };
});
module.exports = router;
