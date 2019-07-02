/*
 * @Author: lixingda
 * @Desc: 作为一个中转的类，根据接口请求，决定走哪个model
 * @Date: 2019-06-30 22:03:32
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-07-02 22:35:39
 */
const { Movie, Sentence, Music } = require("./classic");
class Art {
  static async getData(artId, type) {
    let art = null;
    const finder = {
      where: {
        id: artId
      }
    };
    switch (type) {
      case 100:
        art = await Movie.findOne(finder);
        break;
      case 200:
        art = await Music.findOne(finder);
        break;
      case 300:
        art = await Sentence.findOne(finder);
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
