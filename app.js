const koa = require("koa");
const Router = require("koa-router");
const app = new koa();
const router = new Router();

router.get("/hello", (ctx, next) => {
  ctx.body = { key: "hello" };
});
// ctx.router available
app.use(router.routes());

app.listen(3000);
