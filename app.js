/*
 * @Author: lixingda
 * @Desc: 第一个get请求
 * @Date: 2019-12-01 16:58:52
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-12-01 17:18:29
 */

const koa = require("koa");

const app = new koa();

app.use((ctx, next) => {
  if (ctx.path === "/getMessage" && ctx.method === "GET") {
    ctx.body = {
      message: "成功获取了请求"
    };
  }
});
app.listen(3000);
