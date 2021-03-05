// pages/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '16600054916', //联系电话
    wechat: '16600054916' //微信公众号
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  //拨打电话
  makeCall() {
    var tel = this.data.phone;
    wx.makePhoneCall({
      phoneNumber: tel
    })
  },
  //复制微信
  copyText() {
    var wechat = this.data.wechat;
    wx.setClipboardData({
      data: wechat,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功'
            })
          }
        })
      }
    })
  }
})