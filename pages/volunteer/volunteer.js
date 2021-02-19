// pages/volunteer/volunteer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      array:[
        {
          name:"aa",
          age:1
        },{
          name:"bb",
          age:2
        },{
          name:"cc",
          age:3
        }
      ],
      arrays:[
        {
          name:"dd",
          age:4
        },{
          name:"ee",
          age:5
        },{
          name:"ff",
          age:6
        }
      ],
      isShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  change(data){
    let type = +data.currentTarget.dataset.type
    switch (type) {
      case 0:
        this.setData({
          isShow:false
        });
        break;
      case 1:
        this.setData({
          isShow:true
        });
        break;

      default:
        break;
    }
  },
  goto(){
    wx.navigateTo({
      url: "/pages/volunteer/volunteersignup/volunteersignup",
    });
  }
})