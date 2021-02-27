// pages/space/reservation/reservation.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    result: [],
    communityName: "",
    name: "",
    company: "",
    idcard: "",
    activityName: "",
    activityTopic: "",
    activityType: "",
    joinNumber: "",
    phone: "",
    communityNameError: "",
    nameError: "",
    companyError: "",
    activityNameError: "",
    activityTopicError: "",
    activityTypeError: "",
    joinNumberError: "",
    phoneError: "",
    actions1: [{
        name: "活动主题1",
      },
      {
        name: "活动主题2",
      },
    ],
    actions2: [{
        name: "活动类型1",
      },
      {
        name: "活动类型2",
      },
    ],
    actions: [{
        name: "社区1",
      },
      {
        name: "社区2",
      },
    ],
    show: false,
    show1: false,
    show2: false,
    shows: false
  },
  // 判断表单是否填写
  vform() {
    this.setData({
      communityNameError: "",
      nameError: "",
      companyError: "",
      activityNameError: "",
      activityTopicError: "",
      activityTypeError: "",
      joinNumberError: "",
      phoneError: "",
    })
    if (this.data.communityName == "") {
      this.setData({
        communityNameError: '请选择社区名称',
      });
      return false
    }
    if (this.data.name == "") {
      this.setData({
        nameError: '请输入姓名',
      });
      return false
    }
    if (this.data.company == "") {
      this.setData({
        companyError: "请输入单位"
      });
      return false
    }
    if (this.data.activityName == "") {
      this.setData({
        activityNameError: '请输入活动名称',
      });
      return false
    }
    if (this.data.activityTopic == "") {
      this.setData({
        activityTopicError: '请选择活动主题',
      });
      return false
    }
    if (this.data.activityType == "") {
      this.setData({
        activityTypeError: '请选择活动类型',
      });
      return false
    }
    if (this.data.joinNumber == "") {
      this.setData({
        joinNumberError: '请输入参与人数',
      });
      return false
    }
    if (this.data.phone == "") {
      this.setData({
        phoneError: "请输入联系方式"
      });
      return false
    }
    return true
  },
  onClose(e) {
    if (e.currentTarget.dataset.select == 0) {
      this.setData({
        show: false
      });
    } else if (e.currentTarget.dataset.select == 1) {
      this.setData({
        show1: false
      });
    } else if (e.currentTarget.dataset.select == 2) {
      this.setData({
        show2: false
      });
    }
  },
  showAction(e) {
    if (e.currentTarget.dataset.select == 0) {
      this.setData({
        show: !this.data.show,
      });
    } else if (e.currentTarget.dataset.select == 1) {
      this.setData({
        show1: !this.data.show1,
      });
    } else if (e.currentTarget.dataset.select == 2) {
      this.setData({
        show2: !this.data.show2,
      });
    }
  },
  onSelect(e) {
    if (e.currentTarget.dataset.select == 0) {
      this.setData({
        communityName: e.detail.name,
      });
    } else if (e.currentTarget.dataset.select == 1) {
      this.setData({
        activityTopic: e.detail.name,
      });
    } else if (e.currentTarget.dataset.select == 2) {
      this.setData({
        activityType: e.detail.name,
      });
    }
  },
  gotos() {
    if (this.vform()) {
      if (this.data.result.length > 0) {
        wx.showToast({
          title: '场地预约成功',
          success: function (res) {
            setTimeout(() => {
              wx.navigateTo({
                url: "/pages/active/success/success",
              });
            }, 2000)
          }
        })

      }else {
        wx.showToast({
          title: '请至少选择一项服务支持！！',
        })
      }
    } 
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
  showstate(){
    this.setData({
      shows: true
    })
  },
  onCloses() {
    this.setData({
      shows: !this.data.shows
    })
  }
});