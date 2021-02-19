// pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    historyList:[
      {
        id: 1,
        img:'../../images/bg.png',
        title:'2021新春民族音乐会',
        des:'活动介绍活动介绍活动介绍活动介绍',
        state:'1'
      },
      {
        id: 2,
        img:'../../images/bg.png',
        title:'2021新春民族音乐会',
        des:'活动介绍活动介绍活动介绍活动介绍',
        state:'1'
      },
      {
        id: 3,
        img:'../../images/bg.png',
        title:'2021新春民族音乐会',
        des:'活动介绍活动介绍活动介绍活动介绍',
        state:'1'
      },
      {
        id: 4,
        img:'../../images/bg.png',
        title:'2021新春民族音乐会',
        des:'活动介绍活动介绍活动介绍活动介绍',
        state:'1'
      },
      {
        id: 5,
        img:'../../images/bg.png',
        title:'2021新春民族音乐会',
        des:'活动介绍活动介绍活动介绍活动介绍',
        state:'1'
      },
      {
        id: 6,
        img:'../../images/bg.png',
        title:'2021新春民族音乐会',
        des:'活动介绍活动介绍活动介绍活动介绍',
        state:'1'
      },
      {
        id: 7,
        img:'../../images/bg.png',
        title:'2021新春民族音乐会',
        des:'活动介绍活动介绍活动介绍活动介绍',
        state:'1'
      },
      {
        id: 8,
        img:'../../images/bg.png',
        title:'2021新春民族音乐会',
        des:'活动介绍活动介绍活动介绍活动介绍',
        state:'1'
      }
    ]
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

  // 跳转活动详情
  toDetails(e){
    console.log(e.currentTarget.dataset);
    wx.navigateTo({
      url: '../activity/activity?id='+e.currentTarget.dataset.id+'&state='+e.currentTarget.dataset.state
    });
  }
})