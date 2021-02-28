// pages/space/details/details.js
const { apiHost } = getApp().globalData;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    detailid:null,
    page: "1",
   rows: "100",
    item:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      detailid:options.spaceid
    })
    this.getSpaceList()
  },
  shequ() {
    wx.navigateTo({
      url: "/pages/space/reservation/reservation",
    });
  },
  timeinterval(){
    wx.navigateTo({
      url: "/pages/space/time/time",
    });
  },
  getSpaceList() {
    let params = {
      page: this.data.page,
      rows: this.data.rows,
    };
    wx.request({
      url:
        apiHost +
        `prod-api/api/field/list?page=${params.page}&rows=${params.rows}`,
      data: params,
      method: "POST",
      success: (res) => {
        if (res.data.code == 200) {
          let data= res.data.data.filter(x=>{
            return x.id==this.data.detailid
          }) 
          data[0].banner="http://8.141.48.40:81" + data[0].banner;
          let timeType = wx.getStorageSync("DICT_TIME_SLOT");
          let time = data[0].serviceTime.split(",");
          let arr = [];
          time.forEach((x) => {
            timeType.forEach((y) => {
              if (x == y.dictValue) {
                arr.push(y.dictLabel);
              }
            });
          });

          data[0].timeStr = arr.join(",");
          this.setData({
            item: data[0],
          });
        }
      },
    });
  },
  copy(){
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
callphone: function(){
  wx.makePhoneCall({
    phoneNumber: this.data.item.phone,
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
