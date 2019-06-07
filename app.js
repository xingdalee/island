const koa = require("koa");
const app = new koa();
const InitManager = require('./core/init.js')
const KoaBodyparser = require('koa-bodyparser')
// koa的请求中获取body参数的第三方中间件
app.use(KoaBodyparser())
InitManager.InitCore(app);
app.listen(3000);
