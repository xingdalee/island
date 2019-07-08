/*
 * @Author: lixingda
 * @Desc: 作为一个中转的类，根据接口请求，决定走哪个model
 * @Date: 2019-06-30 22:03:32
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-07-08 23:28:30
 */
const { Movie, Sentence, Music } = require("./classic");
class Art {
  static async getData(artId, type, useScpoe = true) {
    let art = null;
    const finder = {
      where: {
        id: artId
      }
    };
    const scope = useScpoe ? "bh" : null;
    switch (type) {
      case 100:
        art = await Movie.scope(scope).findOne(finder);
        break;
      case 200:
        art = await Music.scope(scope).findOne(finder);
        break;
      case 300:
        art = await Sentence.scope(scope).findOne(finder);
        break;
      case 400:
        break;

      default:
        break;
    }
    return art;
  }
}
module.exports = {
  Art
};
