// pages/partake/partake.js
const { apiHost } = getApp().globalData;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    parTake: [],
    page: 1,
    rows: 100,
    userInfo: wx.getStorageSync("userInfo"),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList();
  },
  getList() {
    let openId = wx.getStorageSync("userInfo").openid;
    let { page, rows } = this.data;
    wx.request({
      url:
        apiHost +
        `/prod-api/api/enroll/activityEnroll?openId=${openId}&page=${page}&rows=${rows}`,
      method: "POST",
      success: (res) => {
        console.log(res.data.data);
        if (res.data.code == 200) {
          this.setData({
            parTake: res.data.data,
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
  // 参加活动
  intoActive() {
    wx.navigateTo({
      url: "../active/active",
    });
  },
  // 跳转活动详情
  toDetails(e) {
    console.log(e.currentTarget.dataset);
    if (e.currentTarget.dataset.state != "3") {
      wx.navigateTo({
        url:
          "../activity/activity?id=" +
          e.currentTarget.dataset.id +
          "&state=" +
          e.currentTarget.dataset.state,
      });
    } else {
      wx.navigateTo({
        url: "../order/order?id=" + e.currentTarget.dataset.id,
      });
    }
  },
});
