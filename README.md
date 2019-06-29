# island

## 部分安装包说明

npm i nodemo -g nodejs 自动刷新重启编译

requireDirectory:可以自动加载 api 下所有的 js 文件

## 笔记

const path = ctx.params;
const query = ctx.request.query;
const header = ctx.request.header;
const body = ctx.request.body;
const v = await new PositiveIntegerValidator().validate(ctx);
parsed 是否进行数据类型转换，如把字符串 id 转换为数字类型
第一个参数是获取的参数的嵌套地址，通过 key 来获取数据并且不用关心是否空值，比如 body={a{b:{c:1}}},可以设置为"a.b.c"
const id = v.get("path.id", (parsed = false));
ctx.body = { key: "v1book" };
