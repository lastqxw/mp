// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detals:{
      state:'1'
    },
    active: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
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
  }
})