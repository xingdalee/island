const Router = require("koa-router");
const router = new Router({
  prefix: "/v1/classic"
});
const { Auth } = require("../../../middlewares/auth");
const { Flow } = require('../../models/flow');
const { PositiveIntegerValidator } = require("../../validator/validator");
// new Auth().m 是一个中间件，放在下一个中间件的前面执行
// new Auth(9) 表示 9代表能访问这个api的级别
router.get("/latest", new Auth().m, async (ctx, next) => {
  // 给flow表的index字段数据倒序排序，并返回第一个数据，在业务上，index最大的，就是最新的
  const flowData = await Flow.findOne({
    order: [["index", "DESC"]]
  });
  ctx.body = flowData;
});
module.exports = router;
