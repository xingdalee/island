const Router = require("koa-router");
const router = new Router();
router.get("v2/book/latest", (ctx, next) => {
  ctx.body = { key: "v2 book" };
});
module.exports = router;
