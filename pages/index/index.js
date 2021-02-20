// index.js
// 获取应用实例
const app = getApp();
const { apiHost } = getApp().globalData;
Page({
  data: {
    background: [
      "https://s3.ax1x.com/2021/02/20/y4Hxp9.png",
      "https://s3.ax1x.com/2021/02/20/y4LPiD.png",
      "../../images/bg.png",
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    page: "1",
    rows: "10",
    activeList: [],
  },
  onLoad() {
    this.getActiveList();
  },
  goto(e) {
    let type = +e.currentTarget.dataset.type;
    switch (type) {
      case 1:
        wx.navigateTo({
          url: "/pages/active/active",
        });
        break;
      case 2:
        wx.navigateTo({
          url: "/pages/teacher/list",
        });
        break;
      case 4:
        wx.navigateTo({
          url: "/pages/volunteer/volunteer",
        });
        break;
      case 5:
        wx.navigateTo({
          url: "/pages/history/history",
        });
        break;
      case 6:
        wx.navigateTo({
          url: "/pages/sign/sign",
        });
        break;
      case 7:
        wx.navigateTo({
          url: "/pages/signout/pointsexchange/pointsexchange",
        });
        break;
      default:
        break;
    }
  },
  gotoDetails(e) {
    let id = e.currentTarget.dataset.activeid;
    wx.navigateTo({
      url: "/pages/active/details/details?id=" + id,
    });
  },
  getActiveList() {
    let params = {
      page: this.data.page,
      rows: this.data.rows,
    };
    wx.request({
      url:
        apiHost +
        `prod-api/api/activity/list?page=${params.page}&rows=${params.rows}`,
      data: params,
      method: "POST",
      success: (res) => {
        console.log(res);
        if (res.data.code == 200) {
          res.data.data.forEach((element) => {
            element.banner = "http://8.141.48.40:81" + element.banner;
          });
          this.setData({
            activeList: res.data.data,
          });
        }
      },
    });
  },
});
