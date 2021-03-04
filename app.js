// app.js
App({
  onLaunch() {
    let that = this;
    // 展示本地存储能力
    const logs = wx.getStorageSync("logs") || [];
    wx.login({
      success: function (res) {
        console.log(that, "1111111111111");
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
          that.getSave();
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
        that.globalData.userInfo.nickname = res.userInfo.nickName;
        that.globalData.userInfo.nickname = res.userInfo.nickName;
        item.avatarUrl = res.userInfo.avatarUrl;
        item.avatarUrl = res.userInfo.avatarUrl;
        wx.setStorageSync("userInfo", item);
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        if (this.userInfoReadyCallback) {
          this.userInfoReadyCallback(res);
        }
      },
    });
  },
  getSave(){
    let that = this;
    let { apiHost, code,userInfo } = that.globalData;
    console.log(userInfo)
    wx.request({
      url: apiHost + `/prod-api/api/weChat/updateWxUserInfo?avatarUrl=${userInfo.avatarUrl}&city=${userInfo.city}&code=${code}&country=${userInfo.country}&gender=${userInfo.gender}&nickName=${userInfo.nickname}&openId=${userInfo.openid}&province=${userInfo.province}&unionId=${userInfo.unionId}`,
      method: "POST",
      success: (e) => {
        console.log(e,'e');
      },
    });
  },
  globalData: {
    code: "",
    userInfo: null,
    apiHost: "https://www.bjshusiyuan.com/",
  },
});
