const Router = require("koa-router");
const router = new Router();

router.get("/v1/getMessage", (ctx, next) => {
  ctx.body = {
    message: "我是版本1.0返回的数据"
  };
});

module.exports = router;
