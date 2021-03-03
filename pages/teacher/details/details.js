// pages/teacher/details/details.js
const {
  apiHost
} = getApp().globalData;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    rows: 1000,
    active: 0,
    teacherlist: null,
    item: {},
    history: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      teacherlist: JSON.parse(options.datalist)
    })
    this.setData({
      item: this.data.teacherlist
    })
    this.gethistory()
  },
  gethistory() {
    let params = {
      page: this.data.page,
      rows: this.data.rows,
    };
    wx.request({
      url: apiHost +
        `prod-api/api/activity/activityHisList?page=${params.page}&rows=${params.rows}`,
      data: params,
      method: "POST",
      success: (res) => {
        if (res.data.code == 200) {
          res.data.data.forEach((element) => {
            element.banner = "http://8.141.48.40:81" + element.banner;
          });
          this.setData({
            history: res.data.data
          })
          console.log(this.data.history,'istory')
        }
      },
    });
  },
  goto(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "/pages/teacher/active/active?activeid=" + id,
    });
  },
  gotohistory(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "/pages/active/details/details?id=" + id,
    });
  }
});