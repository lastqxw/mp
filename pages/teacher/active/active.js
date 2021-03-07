const { apiHost } = getApp().globalData;
import { dictMain } from "../../../utils/dict";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    page:1,
    rows: 1000,
    active: 0,
    activeid:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      activeid:options.activeid
    })
    this.getActiveList()
  },
  goto: function () {
    wx.navigateTo({
      url: "/pages/active/event/event?id="+this.data.item.id,
    });
  },
  getActiveList() {
    
    wx.request({
      url:
        apiHost +
        `prod-api/api/lecturer/getLecturerById?lecturerId=${this.data.activeid}`,
      method: "POST",
      success: (res) => {
        if (res.data.code == 200) {
          let activeType = wx.getStorageSync("DICT_ACTIVITY_TYPE");
          let tipicType = wx.getStorageSync("DICT_TOPIC_TYPE");
          res.data.data.activityList[0].activeTypeName = activeType.filter(
            (x) => x.dictValue == res.data.data.activityList[0].activityType
          )[0].dictLabel;
          res.data.data.activityList[0].tipicTypeName = tipicType.filter(
            (x) => x.dictValue == res.data.data.activityList[0].topicType
          )[0].dictLabel;
          }
          res.data.data.activityList[0].picture = "http://8.141.48.40:81" + res.data.data.activityList[0].picture;
          this.setData({
            item:res.data.data.activityList[0]
          })
      },
    });
  },

});
