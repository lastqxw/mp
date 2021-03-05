// pages/signout/pointsexchange/pointsexchange.js
const { apiHost } = getApp().globalData;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    page: 1,
    rows: 1000,
  },
  gotointegral() {
    wx.navigateTo({
      url: "/pages/signout/record/record",
    });
  },
  gotoexchange() {
    wx.navigateTo({
      url: "/pages/signout/secretkey/secretkey",
    });
  },
  goto(e) {
    let id = +e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "/pages/keyExchange/keyExchange?id=" + id,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList();
  },
  getList() {
    let params = {
      page: this.data.page,
      rows: this.data.rows,
    };
    wx.request({
      url:
        apiHost +
        `prod-api/api/gift/list?page=${params.page}&rows=${params.rows}`,
      data: params,
      method: "POST",
      success: (res) => {
        console.log(res);
        if (res.data.code == 200) {
          res.data.data.forEach((element) => {
            element.photos = element.photo.split(",").map((x) => {
              return x ? "http://8.141.48.40:81" + x : "../../../images/bg.png";
            });
          });
          this.setData({
            list: res.data.data,
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
