// index.js
// 获取应用实例
const app = getApp();

Page({
  data: {
    background: [
      "../../images/active1.png",
      "../../images/active2.png",
      "../../images/bg.png",
    ],
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
      case 4:
        wx.navigateTo({
          url: "/pages/volunteer/volunteer",
        });
        break;
      case 5:
        wx.navigateTo({
          url: "/pages/history/history",
        });
        break;
      case 6:
        wx.navigateTo({
          url: "/pages/sign/sign",
        });
        break;
      case 7:
        wx.navigateTo({
          url: "/pages/keyExchange/keyExchange",
        });
        break;
      default:
        break;
    }
  },
  gotoDetails() {
    wx.navigateTo({
      url: "/pages/active/details/details",
    });
  },
});
