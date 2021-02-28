const {
  apiHost
} = getApp().globalData;
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
    checked: false,
    item: null,
    show: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getItem(options.id);
  },
  getItem(id) {
    let params = {
      page: 1,
      rows: 100,
    };
    wx.request({
      url: apiHost +
        `prod-api/api/gift/list?page=${params.page}&rows=${params.rows}`,
      data: params,
      method: "POST",
      success: (res) => {
        if (res.data.code == 200) {
          res.data.data.forEach((element) => {
            element.photos = element.photo.split(',').map(x => {
             return x ?
                 "http://8.141.48.40:81" + x :
                 "../../../images/bg.png";
             })
          });
          let item = res.data.data.filter((x) => x.id == id)[0];
          this.setData({
            item,
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
  onChange(event) {
    this.setData({
      checked: event.detail,
    });
  },
  seestatement() {
    console.log("兑换须知");
    this.setData({
      show: true
    })
  },
  onClose() {
    this.setData({
      show: false
    })
  },
  submit() {
    wx.showToast({
      title: '兑换成功',
      success: function (res) {
        setTimeout(() => {
          wx.navigateBack({
            delta: 1,
          })
        }, 2000)
      }
    })
  },
});