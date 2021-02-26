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
    nameError:'',
    ageError:'',
    phoneError:'',
    addressError:'',
    specialtyError:'',
    show:false
  },
   // 判断表单是否填写
   vform() {
     this.setData({
      nameError:'',
      ageError:'',
      phoneError:'',
      addressError:'',
      specialtyError:'',
     })
     if (this.data.name == "") {
      this.setData({
        nameError:'请输入姓名',
      });
      return false
    }
    if (this.data.age == "") {
      this.setData({
        ageError:"请输入年龄"
      });
      return false
    }
    if (this.data.phone == "") {
      this.setData({
        phoneError: '请输入联系方式',
      });
      return false
    }
    if (this.data.Specialty == "") {
      this.setData({
        specialtyError: '请输入特长',
      });
      return false
    }
    if (this.data.address == "") {
      this.setData({
        addressError: '请输入联系地址',
      });
      return false
    }
    return true
  },
  submit() {
    if (this.vform()) {
      wx.showToast({
        title: '报名成功',
        success:function(res){
         setTimeout(()=>{
          wx.navigateBack({
            delta: 1,
          })
         },2000)
        }
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
    this.setData({
      show:!this.data.show
    })
  },
  onClose(){
    this.setData({
      show:!this.data.show
    })
  }
})