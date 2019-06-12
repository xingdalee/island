const Router = require("koa-router");
const router = new Router({
  prefix: "/v1/classic"
});
const { Auth } = require("../../../middlewares//auth");
const { PositiveIntegerValidator } = require("../../validator/validator");
// new Auth().m 是一个中间件，放在下一个中间件的前面执行
router.post("/latest", new Auth().m, async (ctx, next) => {
  // const path = ctx.params;
  // const query = ctx.request.query;
  // const header = ctx.request.header;
  // const body = ctx.request.body;
  // const v = await new PositiveIntegerValidator().validate(ctx);
  // // parsed是否进行数据类型转换，如把字符串id转换为数字类型
  // // 第一个参数是获取的参数的嵌套地址，通过key来获取数据并且不用关心是否空值，比如body={a{b:{c:1}}},可以设置为"a.b.c"
  // const id = v.get("path.id", (parsed = false));
  // ctx.body = { key: "v1book" };
});
module.exports = router;
