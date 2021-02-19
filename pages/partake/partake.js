// pages/partake/partake.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parTake:[
      {
        id:'1',
        title:'关于公司发展方向的讨论',
        loc:'第三会议室',
        des:'带着纸笔前往会议室',
        date:'',
        time:'16:00',
        state:'1'
      },
      {
        id:'2',
        title:'关于公司发展方向的讨论',
        loc:'第三会议室',
        des:'带着纸笔前往会议室',
        date:'',
        time:'16:00',
        state:'2'
      },
      {
        id:'3',
        title:'关于公司发展方向的讨论',
        loc:'第三会议室',
        des:'带着纸笔前往会议室',
        date:'02-16',
        time:'16:00',
        state:'3'
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
  // 参加活动
  intoActive(){
    wx.navigateTo({
      url: '../active/active'
    });
  },
  // 活动详情
  toDetails(e){
    console.log(e.currentTarget.dataset);
    if(e.currentTarget.dataset.state!='3'){
      wx.navigateTo({
        url: '../activity/activity?id='+e.currentTarget.dataset.id+'&state='+e.currentTarget.dataset.state
      });
    }else{
      wx.navigateTo({
        url: '../order/order?id='+e.currentTarget.dataset.id
      });
    }
  }
})