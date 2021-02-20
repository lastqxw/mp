Page({
  /**
   * 页面的初始数据
   */
  data: {
    background: [
      "https://s3.ax1x.com/2021/02/20/y4Hxp9.png",
      "https://s3.ax1x.com/2021/02/20/y4LPiD.png",
    ],
    indicatorDots: false,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    checked:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  onChange(event) {
    this.setData({
      checked: event.detail,
    });
  },
  seestatement(){
    console.log('兑换须知')
  }
})
