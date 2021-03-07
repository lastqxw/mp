// pages/personal/personal.js
const { userInfo } = getApp().globalData;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    linkList: [],
    userInfo: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let userInfo = wx.getStorageSync("userInfo");
    let isAdmin = userInfo.isAdmin == "N" ? false : true;
    let linkList = [
      {
        title: "关于我们",
        url: "../about/about",
        isShow: true,
      },
      {
        title: "我的志愿活动",
        url: "/pages/volunteer/volunteer",
        isShow: true,
      },
      {
        title: "联系电话",
        url: "phone",
        isShow: true,
      },
      {
        title: "管理",
        url: "/pages/personal/manage/manange",
        isShow: isAdmin,
      },
    ];
    this.setData({
      userInfo: userInfo,
      linkList,
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
  //跳转页面
  tolink(data) {
    if (data.currentTarget.dataset.url) {
      if (data.currentTarget.dataset.url == "phone") {
        wx.makePhoneCall({
          phoneNumber: "1340000", //仅为示例，并非真实的电话号码
        });
      } else {
        wx.navigateTo({
          url: data.currentTarget.dataset.url,
        });
      }
    }
  },
});
