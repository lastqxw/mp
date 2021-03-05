// pages/space/reservation/reservation.js
const { apiHost } = getApp().globalData;
import { dictMain } from "../../../utils/dict";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    openId: "123456",
    fieldId: null,
    result: [],
    appointmentTypes: "",
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
    cost: "",
    actions1: [],
    actions2: [],
    actions: [],
    show: false,
    show1: false,
    show2: false,
    show3: false,
    shows: false,
    appointmentDate: "",
    yuyueTime: [],
    appointmentTime: "",
    appointmentType: "2",
    isLivery: 0,
    isEquipment: 0,
    isTechnician: 0,
    fieldName: "",
    seeExplain: false,
    actions3: [
      {
        name: "常规预约",
      },
      {
        name: "社区预约",
      },
    ],
  },
  //获取字典数据
  getDict() {
    let community = wx.getStorageSync("DICT_COMMUNITY_NAME");
    let activeType = wx.getStorageSync("DICT_ACTIVITY_TYPE");
    let tipicType = wx.getStorageSync("DICT_TOPIC_TYPE");
    let arr = [],
      arr1 = [],
      arr2 = [];
    community.forEach((x) => {
      arr.push({
        name: x.dictLabel,
      });
    });
    tipicType.forEach((x) => {
      arr1.push({
        name: x.dictLabel,
      });
    });
    activeType.forEach((x) => {
      arr2.push({
        name: x.dictLabel,
      });
    });
    this.setData({
      actions: arr,
      actions1: arr1,
      actions2: arr2,
    });
  },
  // 判断表单是否填写
  vform() {
    this.setData({
      appointmentTypesError: "",
      communityNameError: "",
      nameError: "",
      companyError: "",
      activityNameError: "",
      activityTopicError: "",
      activityTypeError: "",
      joinNumberError: "",
      phoneError: "",
    });
    if (this.data.appointmentTypes == "") {
      this.setData({
        appointmentTypesError: "请选择社区类型",
      });
      return false;
    }
    if (this.data.communityName == "") {
      this.setData({
        communityNameError: "请选择社区名称",
      });
      return false;
    }
    if (this.data.name == "") {
      this.setData({
        nameError: "请输入姓名",
      });
      return false;
    }
    if (this.data.company == "") {
      this.setData({
        companyError: "请输入单位",
      });
      return false;
    }
    if (this.data.activityName == "") {
      this.setData({
        activityNameError: "请输入活动名称",
      });
      return false;
    }
    if (this.data.activityTopic == "") {
      this.setData({
        activityTopicError: "请选择活动主题",
      });
      return false;
    }
    if (this.data.activityType == "") {
      this.setData({
        activityTypeError: "请选择活动类型",
      });
      return false;
    }
    if (this.data.joinNumber == "") {
      this.setData({
        joinNumberError: "请输入参与人数",
      });
      return false;
    }
    if (this.data.phone == "") {
      this.setData({
        phoneError: "请输入联系方式",
      });
      return false;
    }
    return true;
  },
  onClose(e) {
    if (e.currentTarget.dataset.select == 3) {
      this.setData({
        show3: false,
      });
    } else if (e.currentTarget.dataset.select == 0) {
      this.setData({
        show: false,
      });
    } else if (e.currentTarget.dataset.select == 1) {
      this.setData({
        show1: false,
      });
    } else if (e.currentTarget.dataset.select == 2) {
      this.setData({
        show2: false,
      });
    }
  },
  showAction(e) {
    if (e.currentTarget.dataset.select == 3) {
      this.setData({
        show3: !this.data.show3,
      });
    } else if (e.currentTarget.dataset.select == 0) {
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
    if (e.currentTarget.dataset.select == 3) {
      this.setData({
        appointmentTypes: e.detail.name,
      });
    } else if (e.currentTarget.dataset.select == 0) {
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
        let self = this;
        console.log(self.data.result);
        self.setData({
          isLivery: 0,
          isEquipment: 0,
          isTechnician: 0,
        });
        self.data.result.forEach((x) => {
          if (x == "1") {
            self.setData({
              isLivery: 1,
            });
          } else if (x == "2") {
            self.setData({
              isEquipment: 1,
            });
          } else if (x == "3") {
            self.setData({
              isTechnician: 1,
            });
          }
        });
        wx.request({
          url:
            apiHost +
            `prod-api/api/field/fieldAppointmentSave?activityName=${self.data.activityName}&activityTopic=${self.data.activityTopic}&activityType=${self.data.activityType}&appointmentDate=${self.data.appointmentDate}&appointmentTime=${self.data.appointmentTime}&communityName=${self.data.communityName}&cost=${self.data.cost}&fieldId=${self.data.fieldId}&idcard=${self.data.idcard}&isEquipment=${self.data.isEquipment}&isLivery=${self.data.isLivery}&isTechnician=${self.data.isTechnician}&joinNumber=${self.data.joinNumber}&name=${self.data.name}&openId=${self.data.openId}&phone=${self.data.phone}`,
          method: "POST",
          success: (res) => {
            console.log(res);
            if (res.data.code == 200) {
              wx.showToast({
                title: "场地预约成功",
                success: function (res) {
                  setTimeout(() => {
                    wx.navigateTo({
                      url: "/pages/active/success/success",
                    });
                  }, 2000);
                },
              });
            }
          },
        });
      } else {
        wx.showToast({
          title: "请至少选择一项服务支持！！",
        });
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    // let userInfo = wx.getStorageSync("userInfo");
    that.setData({
      fieldId: options.fieldId,
      name: options.name,
      // openId: userInfo.openId
    });
    dictMain("community_name");
    dictMain("activity_type");
    dictMain("topic_type");
    setTimeout(function () {
      that.getDict();
    }, 1000);
  },
  getDateTime() {},
  onChange(event) {
    this.setData({
      result: event.detail,
    });
  },
  onSeeExplain(event) {
    const vm = this;
    vm.setData({
      seeExplain: event.detail,
    });
    console.log(event);
  },
  goto() {
    wx.navigateTo({
      url: "/pages/space/time/time",
    });
  },
  showstate() {
    this.setData({
      shows: true,
    });
  },
  onCloses() {
    this.setData({
      shows: !this.data.shows,
    });
  },
  timeinterval() {
    wx.navigateTo({
      url: "/pages/space/time/time?fieldId=" + this.data.fieldId,
    });
  },
});
