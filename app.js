// app.js
App({
  onLaunch() {
    let that = this;
    // 展示本地存储能力
    const logs = wx.getStorageSync("logs") || [];
  },
  globalData: {
    code: "",
    userInfo: null,
    apiHost: "https://www.bjshusiyuan.com/",
  },
});
