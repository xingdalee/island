/*
 * @Author: lixingda
 * @Desc: 洋葱模型示例
 * @Date: 2019-11-29 10:41:29
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-11-29 13:24:11
 */
const koa = require("koa");

const app = new koa();

app.use(async (ctx, next) => {
  console.log(1);
  await next();
  console.log(1);
});

app.use(async (ctx, next) => {
  console.log(2);
  await next();
  console.log(2);
});

app.use(async (ctx, next) => {
  console.log(3);
});

app.listen(3000);
