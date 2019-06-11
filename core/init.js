const requireDirectory = require("require-directory");
const Router = require("koa-router");

class InitManager {
  // 接受app实例进行初始化
  static InitCore(app) {
    InitManager.app = app;
    InitManager.InitLoadRouter();
    InitManager.LoadConfig();
    InitManager.LoadHttpException();
  }
  static LoadConfig(path = "") {
    const cpnfigPath = path || `${process.cwd()}/config/config.js`;
    const config = require(cpnfigPath);
    global.config = config;
  }
  // 初始化路由
  static InitLoadRouter() {
    // 配置绝对路径
    const apiDirectory = `${process.cwd()}/app/api`;
    // 借助requireDirectory可以自动加载api下所有的js文件
    requireDirectory(module, apiDirectory, {
      visit: obj => {
        if (obj instanceof Router) {
          InitManager.app.use(obj.routes());
        }
      }
    });
  }
  static LoadHttpException() {
    const exception = require('./http-exception.js');
    global.errs = exception;
  }
}
module.exports = InitManager;
