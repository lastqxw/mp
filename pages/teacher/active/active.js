const { apiHost } = getApp().globalData;
import { dictMain } from "../../../utils/dict";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    page:1,
    rows: 10,
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
        `dev-api/api/lecturer/getLecturerById?lecturerId=${this.data.activeid}`,
      method: "POST",
      success: (res) => {
        if (res.data.code == 200) {
         console.log(res,'res')
          }
      },
    });
  },

});
