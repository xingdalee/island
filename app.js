const koa = require("koa");

const app = new koa();

app.use((ctx, next) => {
  console.log("第1个中间件");
  // 根据中间件的上下文顺序依次调用
  next();
});

app.use((ctx, next) => {
  console.log("第2个中间件");
});

app.listen(3000);
