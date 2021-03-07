// pages/active/active.js
const dayjs = require("../../../miniprogram_npm/dayjs/index");
import {
  dictMain
} from "../../../utils/dict";
const {
  apiHost
} = getApp().globalData;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    fieldId: null,
    dateList: [],
    weekArr: ["日", "一", "二", "三", "四", "五", "六"],
    weekList: [],
    chooseDay: "",
    timeRange: [],
    timeRange1: [],
    activeRange: [],
    activeRangeVal: [],
    fullTime: '',
    days: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      fieldId: options.fieldId
    });
    let dates = this.getDatesfunction(dayjs());
    let datas = [];
    dates.forEach((t) => {
      datas.push({
        fullTime: dayjs(t).format('YYYY-MM-DD'),
        time: dayjs(t).format('DD')
      });
    });
    this.setData({
      chooseDay: dayjs().format("DD"),
      fullTime: dayjs().format("YYYY-MM-DD"),
      dateList: datas,
    });
    var that = this;
    dictMain("time_slot");
    setTimeout(function () {
      that.getTimeRange();
    }, 1000);
    //获取当前时间
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    //获取年
    var Y = date.getFullYear();
    //获取月
    var M =
      date.getMonth() + 1 < 10 ?
      "0" + (date.getMonth() + 1) :
      date.getMonth() + 1;
    this.setData({
      days: Y + "." + M,
    });
  },
  //获取字典数据
  getTimeRange() {
    wx.showLoading({
      title: '加载中',
    })
    let times = wx.getStorageSync("DICT_TIME_SLOT");
    let timeRange = [];
    let timeRange1 = [];
    let timeRange2 = [];
    let timeRange3 = [];
    let date = this.data.fullTime;
    let fieldId = this.data.fieldId;
    let self = this;
    wx.request({
      url: apiHost +
        `prod-api/api/field/appointmentTimeList?appointmentDate=${date}&fieldId=${fieldId}`,
      method: "POST",
      success: (res) => {
        if (res.data.code == 200) {
          let code = res.data.data.appointmentTime.split(',');
          times.forEach(x => {
            if (code.indexOf(x.dictValue) != -1) {
              let date = x.dictLabel.split('-')
              // console.log(date,'date')
              if (date[0].split(":")[0] < 13) {
                timeRange1.push({
                  dictLabel: x.dictLabel,
                  dictValue: x.dictValue,
                  isActive: 0
                })
               
              }else  if (date[0].split(":")[0] < 19) {
                console.log(date,'date')
                timeRange2.push({
                  dictLabel: x.dictLabel,
                  dictValue: x.dictValue,
                  isActive: 0
                })
              }else  {
                timeRange3.push({
                  dictLabel: x.dictLabel,
                  dictValue: x.dictValue,
                  isActive: 0
                })
              }
              timeRange.push({
                dictLabel: x.dictLabel,
                dictValue: x.dictValue,
                isActive: 0
              });
            }
          });
          self.setData({
            timeRange: timeRange,
            timeRange1: timeRange1,
            timeRange2: timeRange2,
            timeRange3: timeRange3
          });
        }
        wx.hideLoading();
      },
      error: () => {
        wx.hideLoading()
      }
    });
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
        new Date(newTimeStamp)
        .toLocaleDateString()
        .replace(/\//g, "-")
      );
    }
    this.setData({
      weekList: weekList
    });
    return dates;
  },
  goback() {
    if (this.data.activeRange.length > 0) {
      var self = this;
      var pages = getCurrentPages();
      var prevPage = pages[pages.length - 2];
      prevPage.setData({
        yuyueTime: self.data.days + '.' + self.data.chooseDay + " " + self.data.activeRange,
        appointmentTime: self.data.activeRangeVal.join(','),
        appointmentDate: self.data.chooseDay
      })
      wx.showToast({
        title: '时间选择成功',
        success: function (res) {
          setTimeout(() => {
            wx.navigateBack({
              delta: 1,
            })
          }, 2000)
        }
      })
    } else {
      wx.showToast({
        title: '请至少选择一个时间段！',
      })
    }
  },
  chooseTime(data) {
    let label = data.currentTarget.dataset.label;
    let timeRange = this.data.timeRange;
    let timeRange1 = this.data.timeRange1;
    let timeRange2 = this.data.timeRange2;
    let timeRange3 = this.data.timeRange3;
    timeRange.forEach(t => {
      if (t.dictLabel == label) {
        if (t.isActive == 1) {
          t.isActive = 0;
        } else {
          t.isActive = 1;
        }
      }
    });
    timeRange1.forEach(t => {
      if (t.dictLabel == label) {
        console.log(2222)
        if (t.isActive == 1) {
          t.isActive = 0;
        } else {
          t.isActive = 1;
        }
      }
    });
    timeRange2.forEach(t => {
      if (t.dictLabel == label) {
        console.log(2222)
        if (t.isActive == 1) {
          t.isActive = 0;
        } else {
          t.isActive = 1;
        }
      }
    });
    timeRange3.forEach(t => {
      if (t.dictLabel == label) {
        console.log(2222)
        if (t.isActive == 1) {
          t.isActive = 0;
        } else {
          t.isActive = 1;
        }
      }
    });
    let range = timeRange.filter(x => x.isActive == '1');
    let activeRange = range.map(x => x.dictLabel);
    let activeRangeVal = range.map(x => x.dictValue);
    this.setData({
      timeRange: timeRange,
      timeRange1: timeRange1,
      timeRange2: timeRange2,
      timeRange3: timeRange3,
      activeRange: activeRange,
      activeRangeVal: activeRangeVal
    })
  },
  //选择日期
  chooseDate(e) {
    let item = e.currentTarget.dataset.item;
    this.setData({
      chooseDay: item.time,
      fullTime: item.fullTime
    });
    this.getTimeRange();
  }
});