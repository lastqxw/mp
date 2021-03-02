// pages/volunteer/Audit/Audit.js
const { apiHost } = getApp().globalData;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    item: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      item: JSON.parse(options.item),
    });
  },
  cellPhone(e) {
    let phone = e.currentTarget.dataset.phone;
    wx.makePhoneCall({
      phoneNumber: phone, //仅为示例，并非真实的电话号码
    });
  },
  signIn() {
    let item={
      qrcode:this.data.item.activityEnrollQR,
      signType:'签到'
    }
    wx.navigateTo({
      url: '/pages/volunteer/sign/sign?item='+JSON.stringify(item),
    })
  },
  signOut() {
    let item={
      qrcode:this.data.item.activityEnrollQR,
      signType:'签退'
    }
    wx.navigateTo({
      url: '/pages/volunteer/sign/sign?item='+JSON.stringify(item),
    })
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
