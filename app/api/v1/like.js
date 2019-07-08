const Router = require("koa-router");
const router = new Router({
  prefix: "/v1/like"
});
const { Auth } = require("../../../middlewares/auth");
const { Favor } = require("../../models/favor");
const { LikeValidator } = require("../../validator/validator");
const { success } = require("../../lib/helper");

// 点赞
router.post("/", new Auth().m, async (ctx, next) => {
  // validate里的第二个参数是别名，里面验证id的将会验证art_id
  const v = await new LikeValidator().validate(ctx, {
    id: "art_id"
  });
  const flowData = await Favor.like(
    v.get("body.art_id"),
    v.get("body.type"),
    ctx.auth.uid
  );
  success();
  ctx.body = { flowData };
});

// 取消点赞
router.post("/cancel", new Auth().m, async (ctx, next) => {
  // validate里的第二个参数是别名，里面验证id的将会验证art_id
  const v = await new LikeValidator().validate(ctx, {
    id: "art_id"
  });
  const flowData = await Favor.dislike(
    v.get("body.art_id"),
    v.get("body.type"),
    ctx.auth.uid
  );
  success();
  ctx.body = { flowData };
});
module.exports = router;
