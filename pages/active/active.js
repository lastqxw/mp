// pages/active/active.js
const dayjs = require("../../miniprogram_npm/dayjs/index");
const { apiHost } = getApp().globalData;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    dateList: [],
    weekList: ["一", "二", "三", "四", "五", "六", "日"],
    today: "",
    active: 0,
    chooseDate: "",
    typeList: [
      "全部",
      "亲子",
      "书法",
      "瑜伽",
      "音乐",
      "分类",
      "分类",
      "分类",
      "分类",
      "分类",
    ],
    page: 1,
    rows: 10,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    let today = dayjs().date();
    let datas = this.getDatesfunction(dayjs()).map((x) => x.split("-")[2]);
    this.setData({
      today,
      dateList: datas,
    });
    this.getActiveList();
  },
  getDatesfunction(currentTime) {
    //JS获取当前周从星期一到星期天的日期
    let currentDate = new Date(currentTime);
    let timesStamp = currentDate.getTime();
    let currenDay = currentDate.getDay();
    let dates = [];
    for (let i = 0; i < 7; i++) {
      dates.push(
        new Date(timesStamp + 24 * 60 * 60 * 1000 * (i - ((currenDay + 6) % 7)))
          .toLocaleDateString()
          .replace(/\//g, "-")
      );
    }
    return dates;
  },
  getActiveList() {
    let params = {
      page: this.data.page,
      rows: this.data.rows,
    };
    wx.request({
      url: apiHost + "prod-api/api/activity/list",
      data: params,
      method: "POST",
      success: function (res) {
        console.log(res);
      },
    });
  },
  goto() {
    wx.navigateTo({
      url: "/pages/active/details/details",
    });
  },
  changeType(e) {
    let type = +e.currentTarget.dataset.id;
    this.setData({
      active: type,
    });
  },
  choose(e) {
    let date = e.currentTarget.dataset.date;
    this.setData({
      chooseDate: date,
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
