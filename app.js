const koa = require("koa");
const app = new koa();
const Router = require("koa-router");
const requireDirectory = require("require-directory");
// 借助requireDirectory可以自动加载api下所有的js文件
requireDirectory(module, "./api", {
  visit: WenLoadModules
});
function WenLoadModules(obj) {
  app.use(obj.routes());
}
app.listen(3000);
