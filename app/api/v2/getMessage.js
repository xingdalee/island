const Router = require("koa-router");
const router = new Router();

router.get("/v2/getMessage", (ctx, next) => {
  ctx.body = {
    message: "我是版本2.0返回的数据"
  };
});

module.exports = router;
