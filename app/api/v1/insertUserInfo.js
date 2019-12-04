const Router = require("koa-router");
const { User } = require("../../models/user");
const httpError = require("../../../config/httpError");
const router = new Router();

router.post("/v1/insertUserInfo", async (ctx, next) => {
  const {
    request: {
      body: { name, email }
    }
  } = ctx;
  const findInfo = await User.findUserInfo({ email });
  if (findInfo) {
    const message = "email已存在";
    throw new httpError(message, 400, false);
  }
  const userInfo = await User.create({
    name,
    email
  });
  ctx.body = {
    message: `已成功创建用户${userInfo.name}`
  };
});

module.exports = router;
