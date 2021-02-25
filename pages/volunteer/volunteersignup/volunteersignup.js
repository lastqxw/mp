// pages/volunteersignup/volunteersignup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    age: "",
    phone: "",
    address: "",
    Specialty:"",
    checked: false,
    error: ["", ""]
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
  submit() {
    if (this.vform()) {
      wx.showToast({
        title: '报名成功'
      })
    }
  },
  onChange(event) {
    this.setData({
      checked: event.detail,
    });
  },
  seestatement(){
    console.log('免责声明')
  }
})