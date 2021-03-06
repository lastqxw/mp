// app.js
App({
  onLaunch() {
    let that = this;
    // 展示本地存储能力
    const logs = wx.getStorageSync("logs") || [];
    wx.login({
      success: function (res) {
        console.log(res, "1111111111111");
        that.globalData.code = res.code;
        that.getOpenId();
      },
    });
  },
  getOpenId() {
    let that = this;
    let { apiHost, code } = that.globalData;
    wx.request({
      url: apiHost + `/prod-api/api/weChat/login?code=${code}`,
      method: "POST",
      success: (e) => {
        console.log(e);
        if (e.data.code == 200) {
          that.globalData.userInfo = e.data.data;
          console.log(that.globalData.userInfo);
          that.getInfo(e.data.data);
        }
      },
    });
  },
  getInfo(item) {
    let that = this;
    wx.getUserInfo({
      success: (res) => {
        console.log(res);
        // 可以将 res 发送给后台解码出 unionId

        item = {
          ...item,
          ...res.userInfo,
        };

        that.setUserInfo(item);
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        if (this.userInfoReadyCallback) {
          this.userInfoReadyCallback(res);
        }
      },
    });
  },
  setUserInfo(item) {
    console.log(item);
    let that = this;
    wx.request({
      url:
        that.globalData.apiHost +
        `/prod-api/api/weChat/updateWxUserInfo?avatarUrl=${item.avatarUrl}&city=${item.city}&code=${that.globalData.code}&country=${item.country}&gender=${item.gender}&nickName=${item.nickName}&openId=${item.openId}&province=${item.province}&unionId=${item.unionId}`,
      method: "POST",
      success: (res) => {
        console.log(res);
        if (res.data.code == 200) {
          that.globalData.userInfo = res.data.data;
          wx.setStorageSync("userInfo", res.data.data);
        }
      },
    });
  },
  globalData: {
    code: "",
    userInfo: null,
    apiHost: "https://www.bjshusiyuan.com/",
  },
});
