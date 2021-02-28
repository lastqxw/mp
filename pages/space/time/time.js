// pages/active/active.js
const dayjs = require("../../../miniprogram_npm/dayjs/index");
import { dictMain } from "../../../utils/dict";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    fieldId: null,
    dateList: [],
    weekList: ["一", "二", "三", "四", "五", "六", "日"],
    today: "",
    timeRange:[],
    activeRange:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      fieldId: options.fieldId
    })
    let x = dayjs().format("YYYY-MM-DD");
    let datas = this.getDatesfunction(dayjs()).map((x) =>
      x.split("-")[1] < 10
        ? "0" + x.split("-")[1] + "." + x.split("-")[2]
        : x.split("-")[1] + "." + x.split("-")[2]
    );
    this.setData({
      today: x.split("-")[1] + "." + x.split("-")[2],
      dateList: datas,
    });
    var that = this;
    dictMain("time_slot");
    setTimeout(function(){
      that.getDict();
    },1000);
  },
  //获取字典数据
  getDict(){
    let times = wx.getStorageSync("DICT_TIME_SLOT");
    let timeRange = [];
    times.forEach(x=>{
      timeRange.push({
        dictLabel: x.dictLabel,
        isActive: 0
      })
    })
    this.setData({
      timeRange:timeRange
    });
  },
  getDatesfunction(currentTime) {
    //JS获取当前周从星期一到星期天的日期
    let currentDate = new Date(currentTime);
    let timesStamp = currentDate.getTime();
    let currenDay = currentDate.getDay();
    let dates = [];
    for (let i = 0; i < 7; i++) {
      dates.push(
        new Date(timesStamp + 24 * 60 * 60 * 1000 * (i - ((currenDay + 6) % 7)))
          .toLocaleDateString()
          .replace(/\//g, "-")
      );
    }
    return dates;
  },
  goback(){
    var self = this;
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];
    prevPage.setData({
      appointmentTime: self.data.activeRange,
      appointmentDate: self.data.today
    })
    wx.showToast({
      title: '时间选择成功',
      success:function(res){
       setTimeout(()=>{
        wx.navigateBack({
          delta: 1,
        })
       },2000)
      }
    })
  },
  chooseTime(data){
    let label = data.currentTarget.dataset.label;
    let timeRange = this.data.timeRange;
    timeRange.forEach(t=>{
      if(t.dictLabel==label){
        if(t.isActive==1){
          t.isActive=0;
        }else{
          t.isActive=1;
        }
      }
    });
    let range = timeRange.filter(x=>x.isActive=='1');
    let activeRange = range.map(x=>x.dictLabel);
    this.setData({
      timeRange: timeRange,
      activeRange: activeRange
    })
  }
});