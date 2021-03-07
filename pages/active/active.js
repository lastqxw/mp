// pages/active/active.js
const dayjs = require("../../miniprogram_npm/dayjs/index");
const { apiHost } = getApp().globalData;
import { dictMain } from "../../utils/dict";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    dateList: [],
    weekArr: ["日", "一", "二", "三", "四", "五", "六"],
    weekList: [],
    today: "",
    active: 0,
    chooseDate: "",
    typeList: [],
    page: 1,
    rows: 1000,
    activeList: [],
    activeValue: null,
    days: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    dictMain("topic_type");
    let today = dayjs().date();
    let datas = this.getDatesfunction(dayjs()).map((x) => x.split("-")[2]);
    this.setData({
      today,
      dateList: datas,
    });
    this.getActiveList();
    //获取当前时间
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //获取年
    var Y = date.getFullYear();
    //获取月
    var M =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1;
    this.setData({
      days: Y + "." + M,
    });
    let self = this;
    setTimeout(function () {
      let tipicType = wx.getStorageSync("DICT_TOPIC_TYPE");
      self.setData({
        typeList: tipicType,
        activeValue: tipicType[0].dictValue,
      });
      self.getActiveList();
    }, 1000);
  },
  getDatesfunction(currentTime) {
    //JS获取当前往后7天的日期数据
    let currentDate = new Date(currentTime);
    let timesStamp = currentDate.getTime();
    let dates = [],
      weekList = [];
    for (let i = 0; i < 7; i++) {
      let newTimeStamp = timesStamp + 24 * 60 * 60 * 1000 * i;
      let weekIndex = new Date(newTimeStamp).getDay();
      weekList.push(this.data.weekArr[weekIndex]);
      dates.push(
        new Date(newTimeStamp).toLocaleDateString().replace(/\//g, "-")
      );
    }
    this.setData({
      weekList: weekList,
    });
    return dates;
  },
  getActiveList() {
    let params = {
      page: this.data.page,
      rows: this.data.rows,
      topicType: this.data.activeValue,
    };
    wx.request({
      url:
        apiHost +
        `prod-api/api/activity/list?page=${params.page}&rows=${params.rows}&topicType=${params.topicType}`,
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
  goto(e) {
    console.log(e.currentTarget.dataset);
    let id = e.currentTarget.dataset.activeid;
    wx.navigateTo({
      url: "/pages/active/details/details?id=" + id,
    });
  },
  changeType(e) {
    console.log(e.currentTarget.dataset);
    let activeValue = e.currentTarget.dataset.value;
    let activeIndex = e.currentTarget.dataset.index;
    this.setData({
      active: activeIndex,
      activeValue: activeValue,
    });
  },
  choose(e) {
    let date = e.currentTarget.dataset.date;
    this.setData({
      chooseDate: date,
    });
  },
});
