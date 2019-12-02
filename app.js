/*
 * @Author: lixingda
 * @Desc: 第一个get请求
 * @Date: 2019-12-01 16:58:52
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-12-02 14:24:56
 */

const koa = require("koa");
const bodyParser = require("koa-bodyparser");

const app = new koa();
app.use(bodyParser());

app.use(async (ctx, next) => {
  if (ctx.path === "/getMessage" && ctx.method === "GET") {
    const { query, body } = ctx;
    ctx.body = {
      message: "成功获取了请求",
      query,
      body
    };
  }
  await next();
});

app.use((ctx, next) => {
  if (ctx.path === "/insertMessage" && ctx.method === "POST") {
    const {
      query,
      request: { body }
    } = ctx;
    ctx.body = {
      message: "插入数据成功",
      query,
      body
    };
  }
});

app.listen(3000);
