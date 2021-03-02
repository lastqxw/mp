// pages/active/event/event.js
import Dialog from "../../../miniprogram_npm/@vant/weapp/dialog/dialog";
const { apiHost } = getApp().globalData;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    phone: "",
    value2: "",
    sex: "男",
    error: ["", ""],
    show: false,
    actions: [
      {
        name: "男",
      },
      {
        name: "女",
      },
    ],
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
      sex: event.detail.name,
    });
  },
  // 判断表单是否填写
  vform() {
    if (this.data.name == "" && this.data.phone == "") {
      this.setData({
        error: ["请输入姓名", "请输入联系方式"],
      });
      return false;
    } else if (this.data.name == "") {
      this.setData({
        error: ["请输入姓名", ""],
      });
      return false;
    } else if (this.data.phone == "") {
      this.setData({
        error: ["", "请输入联系方式"],
      });
      return false;
    } else {
      return true;
    }
  },
  score() {
    console.log(this.vform());

    if (this.vform()) {
      Dialog.confirm({
        title: "系统提示",
        message: `确认将使用${this.data.item.exchangeIntegral}积分兑换门票，是否兑换？`,
      })
        .then(() => {
          // 调用报名接口
          wx.navigateTo({
            url: "/pages/active/success/success",
          });
        })
        .catch(() => {
          // on cancel
        });
    }
  },
  wxpay() {
    // Dialog.confirm({
    //   message: "确认将支付20元购买门票，是否购买？",
    // })
    //   .then(() => {
    //     // on confirm
    //   })
    //   .catch(() => {
    //     // on cancel
    //   });
    Dialog.alert({
      title: "系统提示",
      message: "暂未开通微信支付",
    }).then(() => {
      // on close
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      activeId: options.id,
    });
    this.getDetails();
  },
  getDetails() {
    wx.request({
      url: apiHost + `/prod-api/api/activity/${this.data.activeId}`,
      method: "GET",
      success: (res) => {
        console.log(res);
        if (res.data.code == 200) {
          let data = res.data.data;
          let activeType = wx.getStorageSync("DICT_ACTIVITY_TYPE");
          let tipicType = wx.getStorageSync("DICT_TOPIC_TYPE");
          let timeType = wx.getStorageSync("DICT_TIME_SLOT");
          data.activeTypeName = activeType.filter(
            (x) => x.dictValue == data.activityType
          )[0].dictLabel;
          data.tipicTypeName = tipicType.filter(
            (x) => x.dictValue == data.topicType
          )[0].dictLabel;
          let time = data.time.split(",");
          console.log(time);
          let arr = [];
          time.forEach((x) => {
            timeType.forEach((y) => {
              if (x == y.dictValue) {
                arr.push(y.dictLabel);
              }
            });
          });

          data.timeStr = arr.join(",");
          data.banner = "http://8.141.48.40:81" + data.banner;
          data.lecturerPicture = "http://8.141.48.40:81" + data.lecturerPicture;
          let value2 = `费用：${data.cost}元 / ${data.exchangeIntegral}积分`;
          this.setData({
            item: data,
            value2,
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
