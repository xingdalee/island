const koa = require("koa");

const app = new koa();
// 在浏览器访问localhost:3000 打印出结果是1 3 4 2
// 洋葱模型
app.use(async (ctx, next) => {
  console.log(1);
  // 根据中间件的上下文顺序依次调用
  await next();
  console.log(2);
});

app.use(async (ctx, next) => {
    // promise 的异步编程 async和await是终极解决方案
  console.log(3);
  await next();
  console.log(4);
});

app.listen(3000);
