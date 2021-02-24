// pages/space/reservation/reservation.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    result: [],
    values:"",
    value:"",
    value1:"",
    value2:"",
    value3:"",
    value4:"",
    value5:"",
    value6:"",
    value7:"",
    error: ["", ""],
    actions1: [
      {
        name: "活动主题1",
      },
      {
        name: "活动主题2",
      },
    ],
    actions2: [
      {
        name: "活动类型1",
      },
      {
        name: "活动类型2",
      },
    ],
    actions: [
      {
        name: "社区1",
      },
      {
        name: "社区2",
      },
    ],
    show: false,
    show1: false,
    show2: false,
  },
  onClose() {
    this.setData({ show: false });
  },
  showAction() {
    console.log(111111);
    this.setData({
      show: !this.data.show,
    });
  },
  onSelect(event) {
    console.log(event.detail);
    this.setData({
      values: event.detail.name,
    });
  },
  onClose1() {
    this.setData({ show1: false });
  },
  showAction1() {
    console.log(111111);
    this.setData({
      show1: !this.data.show1,
    });
  },
  onSelect1(event) {
    console.log(event.detail);
    this.setData({
      value4: event.detail.name,
    });
  },
  onClose2() {
    this.setData({ show2: false });
  },
  showAction2() {
    console.log(111111);
    this.setData({
      show2: !this.data.show2,
    });
  },
  onSelect2(event) {
    console.log(event.detail);
    this.setData({
      value5: event.detail.name,
    });
  },
  gotos(){
    wx.navigateTo({
      url: "/pages/active/success/success",
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  onChange(event) {
    this.setData({
      result: event.detail,
    });
  },
  goto() {
    wx.navigateTo({
      url: "/pages/space/time/time",
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
