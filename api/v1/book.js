const Router = require("koa-router");
const router = new Router();
console.log(1111111111)

router.get("/v1/book/latest", (ctx, next) => {
  ctx.body = { key: "v1book" };
});
module.exports = router;
