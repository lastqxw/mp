// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details:{
      state:'1'
    },
    active: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      details:{
        state:options.state
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
    
  },
  onChange(e){
    console.log(e);
  },
  cancalCall(){
    wx.showModal({
      title: '温馨提示',
      content: '如取消报名，将无法获得积分。',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})