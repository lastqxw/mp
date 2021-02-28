// pages/teacher/details/details.js
const { apiHost } = getApp().globalData;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    rows: 10,
    active: 0,
    teacherlist:null,
    item:{
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      teacherlist:JSON.parse(options.datalist)
    })
    this.setData({
      item:this.data.teacherlist
    })
    this. gethistory()
  },
  gethistory() {
    let params = {
      page: this.data.page,
      rows: this.data.rows,
      topicType:""
    };
    wx.request({
      url:
        apiHost +
        `dev-api/api/activity/activityHisList?page=${params.page}&rows=${params.rows}&topicType=${params.topicType}`,
      data: params,
      method: "POST",
      success: (res) => {
        if (res.data.code == 200) {
            console.log(res,'res')
          }
      },
    });
  },
  goto(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "/pages/teacher/active/active?activeid="+id,
    });
  },
});
