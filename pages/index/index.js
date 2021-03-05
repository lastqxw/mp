// index.js
// 获取应用实例
const app = getApp();
const { apiHost, userInfo } = getApp().globalData;
Page({
  data: {
    background: [],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    page: "1",
    rows: "100",
    activeList: [],
  },
  onLoad() {
    this.getActiveList();
    wx.request({
      url: apiHost + `prod-api/api/banner/list`,
      method: "POST",
      success: (res) => {
        if (res.data.code == 200) {
          res.data.data.forEach((element) => {
            element.banners = element.banner.split(",").map((x) => {
              return "http://8.141.48.40:81" + x;
            });
          });
          this.setData({
            background: res.data.data[0].banners,
          });
        }
      },
    });
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
      case 3:
        wx.navigateTo({
          url: "/pages/space/space",
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
        wx.switchTab({
          url: "/pages/partake/partake",
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
        if (res.data.code == 200) {
          res.data.data.forEach((element) => {
            element.banner =
              "http://8.141.48.40:81" + element.banner.split(",")[0];
          });
          this.setData({
            activeList: res.data.data,
          });
        }
      },
    });
  },
});
