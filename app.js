const koa = require("koa");
const app = new koa();
const InitManager = require('./core/init.js')
InitManager.InitCore(app);
app.listen(3000);
