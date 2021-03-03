// pages/signout/record/record.js
const { apiHost, userInfo } = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    rows:1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getList()
  },
getList(){
  let params = {
    openId:"123456",
    page: this.data.page,
    rows: this.data.rows,
  };
  wx.request({
    url:
      apiHost +
      `/prod-api/api/integralRecord/listByopenId?openId=${params.openId}&page=${params.page}&rows=${params.rows}`,
    data: params,
    method: "POST",
    success: (res) => {
      if (res.data.code == 200) {
        console.log(res,'res')
        
        this.setData({
          recordList: res.data.data,
        });
      }
    },
  });
}
})