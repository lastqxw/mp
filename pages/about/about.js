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
  },
  /**
   * 坐标转换，百度地图坐标转换成腾讯地图坐标
   * lng 腾讯经度（pointy）
   * lat 腾讯纬度（pointx）
   * 经度>纬度
   */
  bMapToQQMap(lng, lat) {

    if (lng == null || lng == '' || lat == null || lat == '') {
      return [lng, lat];
    }
    var x_pi = 3.14159265358979324;
    var x = parseFloat(lng) - 0.0065;
    var y = parseFloat(lat) - 0.006;
    var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
    var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
    var lng = (z * Math.cos(theta)).toFixed(7);
    var lat = (z * Math.sin(theta)).toFixed(7);
    return [lng, lat];
  },
  goto() {
    let latitude = +this.bMapToQQMap(116.363901, 39.898817)[1];
    let longitude = +this.bMapToQQMap(116.363901, 39.898817)[0];
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
      name: "北京市西城区广义街4号华星大厦一楼",
      scale: 18,
    });
  },
})