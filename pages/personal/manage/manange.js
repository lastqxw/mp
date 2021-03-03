// pages/personal/manage/manange.js
const { apiHost } = getApp().globalData;
Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  signIn() {
    let openId = wx.getStorageSync("userInfo").openid;
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        console.log(res);
        if (res) {
          wx.request({
            url:
              apiHost +
              `/prod-api/api/volunteerActivityEnroll/volunteerSignIn?openId=${openId}&volunteerEnrollId=${res.result}`,
            method: "POST",
            success: (r) => {
              if (r.data.code == 200) {
                wx.showToast({
                  title: "签到成功",
                });
              }
            },
          });
        }
      },
    });
  },
  signOut() {
    let openId = wx.getStorageSync("userInfo").openid;
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        console.log(res);
        if (res) {
          wx.request({
            url:
              apiHost +
              `/prod-api/api/volunteerActivityEnroll/volunteerSignOut?openId=${openId}&volunteerEnrollId=${res.result}`,
            method: "POST",
            success: (r) => {
              if (r.data.code == 200) {
                wx.showToast({
                  title: "签退成功",
                });
              }
            },
          });
        }
      },
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
