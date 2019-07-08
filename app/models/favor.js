/*
 * @Author: lixingda
 * @Desc: 用户点赞信息业务表，记录某个用户是否点赞了某个模块
 * @Date: 2019-07-02 23:08:18
 * @Last Modified by: lixingda
 * @Last Modified time: 2019-07-08 22:35:27
 */
const { sequelize } = require("../../core/db");
// 类
const { Sequelize, Model } = require("sequelize");
const classicFields = {
  uid: Sequelize.STRING, // 用户id
  art_id: Sequelize.TINYINT, // 用户点赞的模块
  type: Sequelize.TINYINT // 是否点赞
};
const { Art } = require("./art");
class Favor extends Model {
  // 点赞
  static async like(art_id, type, uid) {
    const favor = await Favor.findOne({
      where: {
        art_id,
        type,
        uid
      }
    });
    // 如果已经点赞了，不需要在点赞
    if (favor) {
      throw new global.errs.LikeError();
    }
    // 开启事务,结果必须要return回去
    return sequelize.transaction(async t => {
      await Favor.create(
        {
          art_id,
          type,
          uid
        },
        {
          transation: t
        }
      );
      const art = await Art.getData(art_id, type);
      // increment给fav_nums字段自动加1
      await art.increment("fav_nums", {
        by: 1,
        transation: t
      });
    });
  }
  // 取消点赞
  static async dislike(art_id, type, uid) {
    const favor = await Favor.findOne({
      where: {
        art_id,
        type,
        uid
      }
    });
    // 如果已经点赞了，不需要在点赞
    if (!favor) {
      throw new global.errs.DisLikeError();
    }
    // 开启事务,结果必须要return回去
    return sequelize.transaction(async t => {
      // favor是已经查询出来的结果，可以直接进行销毁操作
      await favor.destroy({
        // force软删除是false，修改的是delete_at的字段
        force: false,
        transation: t
      });
      const art = await Art.getData(art_id, type);
      // decrement和increment相反，给fav_nums字段自动减1
      await art.decrement("fav_nums", {
        by: 1,
        transation: t
      });
    });
  }
}
Favor.init(classicFields, {
  sequelize,
  tableName: "favor"
});
module.exports = {
  Favor
};
