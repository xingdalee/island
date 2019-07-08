/*
 * @Author: lixingda 
 * @Desc: 程序主入口 
 * @Date: 2019-06-08 11:13:37 
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-07-08 23:02:39
 */
const koa = require("koa");
const app = new koa();
const InitManager = require("./core/init");
const KoaBodyparser = require("koa-bodyparser");
const catchError = require("./middlewares/exception");
// 别名，在package.json中配置好后，可以在系统中使用@模块名引用
require('module-alias/register');
// koa的请求中获取body参数的第三方中间件
app.use(catchError);
app.use(KoaBodyparser());
InitManager.InitCore(app);
app.listen(3000);
