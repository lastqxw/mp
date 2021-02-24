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
    teacherid:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      teacherid:options.teacherid
    })
    this.getTeacherList()
  },
  goto(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "/pages/teacher/active/active?activeid="+id,
    });
  },
  getTeacherList() {
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
              return x.id==this.data.teacherid
            }) 
            data[0].picture="http://8.141.48.40:81" + data[0].picture;
            data[0].activityList.forEach(x=>{
              x.banner="http://8.141.48.40:81" + x.banner
            })
            
            this.setData({
              item: data[0],
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
