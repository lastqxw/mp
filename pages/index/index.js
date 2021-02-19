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
  goto(data) {
    switch (data.currentTarget.dataset.type) {
      case "1":
        wx.navigateTo({
          url: "/pages/active/active",
        });
        break;

      default:
        break;
    }
  },
});
