// pages/volunteer/mine/mine.js
const { apiHost } = getApp().globalData;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    type: 3,
    list: null,
    page: 1,
    rows: 100,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let type = options.type;
    this.setData({
      type,
    });
    this.getList();
  },
  getList() {
    let params = {
      page: this.data.page,
      rows: this.data.rows,
      status: this.data.type,
    };
    let openid = wx.getStorageSync("userInfo").openid;
    wx.request({
      url:
        apiHost +
        `/prod-api/api/volunteerActivityEnroll/volunteerEnroll?page=${params.page}&rows=${params.rows}&status=${params.status}&openId=${openid}`,
      data: params,
      method: "POST",
      success: (res) => {
        console.log(res, "res");
        if (res.data.code == 200) {
          res.data.data.forEach((element) => {
            element.activity.banner =
              "http://8.141.48.40:81" + element.activity.banner.split(",")[0];
          });
          this.setData({
            list: res.data.data,
          });
        }
      },
    });
  },
  goto(e) {
    console.log(e);
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "/pages/volunteer/Audit/Audit?item=" + JSON.stringify(id),
    });
  },
  goto1(e) {
    console.log(e);
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "/pages/volunteer/success/success?item=" + JSON.stringify(id),
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
