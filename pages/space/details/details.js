// pages/space/details/details.js
const {
  apiHost
} = getApp().globalData;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    spacedata: null,
    page: "1",
    rows: "10",
    item: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let data = JSON.parse(options.spacedata)
    let timeType = wx.getStorageSync("DICT_TIME_SLOT");
    if (data.serviceTime&&timeType) {   
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
      item: data
    })
  },
  shequ() {
    wx.navigateTo({
      url: "/pages/space/reservation/reservation?fieldId="+this.data.item.id,
    });
  },
  timeinterval() {
    wx.navigateTo({
      url: "/pages/space/time/time?fieldId="+this.data.item.id,
    });
  },
  copy() {
    wx.setClipboardData({
      data: this.data.item.wechat,
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
  callphone: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.item.phone,
    })
  },
  goto() {
    let mapdata = this.data.item.coordinate.split(',')
    let latitude = +mapdata[0]
    let longitude = +mapdata[1]
    let name = this.data.item.name;
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
      name: name,
      scale: 18
    })
  }
});