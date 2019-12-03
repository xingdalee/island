const Router = require("koa-router");
const { User } = require("../../models/user");

const router = new Router();

router.post("/v1/insertUserInfo", async (ctx, next) => {
  const {
    request: {
      body: { name, email }
    }
  } = ctx;
  const findUserInfo = await User.findOne({
    where: {
      email
    }
  });
  if (findUserInfo) {
    const message = "email已存在";
    ctx.body = {
      message
    };
    throw new Error(message);
  }
//   const userInfo = await User.create({
//     name,
//     email
//   });
//   ctx.body = {
//     message: `已成功创建用户${userInfo.name}`
//   };
});

module.exports = router;
