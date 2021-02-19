// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync("logs") || [];
    wx.login({
      success:function(res){
        console.log(res)
      }
    })
  },
  globalData: {
    userInfo: null,
    apiHost: "http://8.141.48.40:81/",
  },
});
