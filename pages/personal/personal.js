// pages/personal/personal.js
const { userInfo } = getApp().globalData;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    linkList: [
      {
        title: "关于我们",
        url: "../about/about",
      },
      // {
      //   title:'志愿者工作报名',
      //   url:'../about/about'
      // },
      {
        title: "联系电话",
        url: "",
      },
    ],
    userInfo: wx.getStorageSync("userInfo"),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.userInfo);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},
  //跳转页面
  tolink(data) {
    if (data.currentTarget.dataset.url) {
      wx.navigateTo({
        url: data.currentTarget.dataset.url,
      });
    }
  },
});
