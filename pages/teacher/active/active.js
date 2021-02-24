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
    let params = {
      page: this.data.page,
      rows: this.data.rows,
    };
    wx.request({
      url:
        apiHost +
        `/prod-api/api/lecturer/list?page=${params.page}&rows=${params.rows}`,
      data: params,
      method: "POST",
      success: (res) => {
        if (res.data.code == 200) {
          let data= res.data.data.filter(x=>{
              return x.id==this.data.activeid
            }) 
            data[0].activityList.forEach(x=>{
              x.banner="http://8.141.48.40:81" + x.banner
              x.lecturerPicture="http://8.141.48.40:81" + x.lecturerPicture
              let tipicType = wx.getStorageSync("DICT_TOPIC_TYPE");
              x.tipicName=tipicType.filter(
                (y) => y.dictValue == x.topicType
              )[0].dictLabel
             let activeType = wx.getStorageSync("DICT_ACTIVITY_TYPE");
             x.activeName=activeType.filter(
              (y) => y.dictValue == x.activityType
            )[0].dictLabel
            })
            
            this.setData({
              item: data[0].activityList[0],
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
