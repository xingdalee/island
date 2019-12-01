/*
 * @Author: lixingda
 * @Desc: 洋葱模型示例
 * @Date: 2019-11-29 10:41:29
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-11-29 13:24:11
 */
const koa = require("koa");

const app = new koa();

app.use(() => {
  console.log("你好，蒲惠。");
});

// 如何调用下一个中间件？
// app.use(() => {
//   console.log("你好，Koa。");
// });
app.listen(3000);
