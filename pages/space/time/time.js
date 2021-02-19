// pages/active/active.js
const dayjs = require("../../../miniprogram_npm/dayjs/index");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    dateList: [],
    weekList: ["一", "二", "三", "四", "五", "六", "日"],
    today: "",
    typeList: [
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    console.log();
    let x = dayjs().format("YYYY-MM-DD");
    let datas = this.getDatesfunction(dayjs()).map((x) =>
      x.split("-")[1] < 10
        ? "0" + x.split("-")[1] + "." + x.split("-")[2]
        : x.split("-")[1] + "." + x.split("-")[2]
    );
    this.setData({
      today: x.split("-")[1] + "." + x.split("-")[2],
      dateList: datas,
    });
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
  goto() {
    wx.navigateTo({
      url: "/pages/active/details/details",
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
