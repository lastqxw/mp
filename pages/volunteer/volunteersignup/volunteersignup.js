// pages/volunteersignup/volunteersignup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: "",
    value1: "",
    value2: "",
    value3: "",
    value4:"",
    checked: false,
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
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