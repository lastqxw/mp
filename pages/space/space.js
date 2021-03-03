// pages/space/space.js
const { apiHost } = getApp().globalData;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    page: "1",
   rows: "1000",
    spaceList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSpaceList()
  },
  goto(e) {
   let spacedata= JSON.stringify(e.currentTarget.dataset.spacedata)
    wx.navigateTo({
      url: `/pages/space/details/details?spacedata=`+spacedata,
    });
  },
  getSpaceList() {
    let params = {
      page: this.data.page,
      rows: this.data.rows,
    };
    wx.request({
      url:
        apiHost +
        `prod-api/api/field/list?page=${params.page}&rows=${params.rows}`,
      data: params,
      method: "POST",
      success: (res) => {
        if (res.data.code == 200) {
          res.data.data.forEach((element) => {
            element.banners = element.banner.split(',').map(x => {
             return x ?
                 "http://8.141.48.40:81" + x :
                 "../../../images/bg.png";
             })
          });
          this.setData({
            spaceList: res.data.data,
          });
        }
      },
    });
  },
});
