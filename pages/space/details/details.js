// pages/space/details/details.js
const { apiHost } = getApp().globalData;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    spacedata: null,
    page: "1",
    rows: "100",
    item: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let data = JSON.parse(options.spacedata);
    let timeType = wx.getStorageSync("DICT_TIME_SLOT");
    if (data.serviceTime && timeType) {
      let time = data.serviceTime.split(",");
      let arr = [];
      time.forEach((x) => {
        timeType.forEach((y) => {
          if (x == y.dictValue) {
            arr.push(y.dictLabel);
          }
        });
      });
      data.timeStr = arr.join(",");
    }
    this.setData({
      item: data,
    });
  },
  shequ() {
    wx.navigateTo({
      url: `/pages/space/reservation/reservation?fieldId=${this.data.item.id}&name=${this.data.item.name}`,
    });
  },
  timeinterval() {
    wx.navigateTo({
      url: "/pages/space/time/time?fieldId=" + this.data.item.id,
    });
  },
  copy() {
    wx.setClipboardData({
      data: this.data.item.wechat,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: "复制成功",
            });
          },
        });
      },
    });
  },
  callphone: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.item.phone,
    });
  },
  /**
* 坐标转换，百度地图坐标转换成腾讯地图坐标
* lng 腾讯经度（pointy）
* lat 腾讯纬度（pointx）
* 经度>纬度
*/
 bMapToQQMap(lng, lat) {

  if (lng == null || lng == '' || lat == null || lat == ''){
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
    let mapdata = this.data.item.coordinate.split(",");
    let latitude =+this.bMapToQQMap(+mapdata[0], +mapdata[1])[1];
    let longitude = +this.bMapToQQMap(+mapdata[0], +mapdata[1])[0];
    let name = this.data.item.name;
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
      name: name,
      scale: 18,
    });
  },
});
