// index.js
// 获取应用实例
const app = getApp();

Page({
  data: {
    background: ["../../images/active1.png", "../../images/active2.png", "../../images/bg.png"],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
  },
  onLoad() {},
  goto(e) {
    let type = +e.currentTarget.dataset.type;
    switch (type) {
      case 1:
        wx.navigateTo({
          url: "/pages/active/active",
        });
        break;
      case 2:
        wx.navigateTo({
          url: "/pages/teacher/list",
        });
        break;
      default:
        break;
    }
  },
});
