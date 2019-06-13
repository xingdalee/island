/*
 * @Author: lixingda
 * @Desc: 当前的环境是开发还是生产
 * @Date: 2019-06-08 17:55:19
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-06-13 22:34:46
 */
module.exports = {
  environment: "dev",
  security: {
    // 正常的生成token的key需要随机复杂，没有规律
    secretKey: "abcdefg",
    // 令牌过期时间，60*60代表一个小时
    expiresIn: 60 * 60
  }
};
