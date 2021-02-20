// pages/active/details/details.js
const { apiHost } = getApp().globalData;
import { dictMain } from "../../../utils/dict";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    item: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    this.setData({
      activeId: options.id,
    });
    dictMain("activity_type");
    dictMain("topic_type");
    dictMain("time_slot");
    this.getDetails();
    console.log();
  },
  goto: function () {
    wx.navigateTo({
      url: "/pages/active/event/event",
    });
  },
  getDetails() {
    wx.request({
      url: apiHost + `/prod-api/api/activity/${this.data.activeId}`,
      method: "GET",
      success: (res) => {
        console.log(res);
        if (res.data.code == 200) {
          let data = res.data.data;
          let activeType = wx.getStorageSync("DICT_ACTIVITY_TYPE");
          let tipicType = wx.getStorageSync("DICT_TOPIC_TYPE");
          let timeType = wx.getStorageSync("DICT_TIME_SLOT");
          data.activeTypeName = activeType.filter(
            (x) => x.dictValue == data.activityType
          )[0].dictLabel;
          data.tipicTypeName = tipicType.filter(
            (x) => x.dictValue == data.topicType
          )[0].dictLabel;
          let time = data.time.split(",");
          console.log(time);
          let arr = [];
          time.forEach((x) => {
            timeType.forEach((y) => {
              if (x == y.dictValue) {
                arr.push(y.dictLabel);
              }
            });
          });

          data.timeStr = arr.join(",");
          data.banner = "http://8.141.48.40:81" + data.banner;
          data.lecturerPicture = "http://8.141.48.40:81" + data.lecturerPicture;
          this.setData({
            item: res.data.data,
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
