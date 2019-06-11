/*
 * @Author: lixingda
 * @Desc: 设定一个枚举字典，验证用户的登录方式是否合法
 * @Date: 2019-06-11 22:02:40
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-06-11 22:10:56
 */

function isThisType(val) {
  for (const key in this) {
    if ((this[key] = val)) {
      return true;
    }
  }
  return false;
}
const LoginType = {
  USRE_MINI_PROGRAM: 100,
  USER_EMAIL: 101,
  USER_MOBILE: 102,
  ADMIN_EMAIL: 200,
  isThisType
};
module.exports = {
  LoginType
};
