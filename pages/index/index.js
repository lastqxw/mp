// index.js
// 获取应用实例
const app = getApp();

Page({
  data: {
    background: ["demo-text-1", "demo-text-2", "demo-text-3"],
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
