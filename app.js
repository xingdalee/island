/*
 * @Author: lixingda
 * @Desc: 第一个get请求
 * @Date: 2019-12-01 16:58:52
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-12-01 17:32:44
 */

const koa = require("koa");
const Router = require("koa-router");

const app = new koa();
const router = new Router();

router.get("/getMessage", (ctx, next) => {
  ctx.body = {
    message: "我是router返回的消息"
  };
});

// router.post("/insterMessage", (ctx, next) => {
//   ctx.body = {
//     message: "insterMessage执行成功"
//   };
// });

app.use(router.routes());
app.listen(3000);
