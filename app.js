const koa = require("koa");

const app = new koa();
// 加上async关键字，会把当前的函数改为promise的形式
app.use(async (ctx, next) => {
  const axios = require("axios");
  // axios返回的是promise
  // 1、await会求值，自动帮忙算出promise中正确返回的数据
  // 2、await会阻塞线程，把异步的执行方式改为同步的，如果await后面的数据没有返回，程序会一直等待
  const start = Date.now();
  const res = await axios.get("https://baidu.com");
  const end = Date.now();
  console.log(res);
  console.log("时间差:", end - start);
});

app.listen(3000);
