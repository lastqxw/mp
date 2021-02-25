// pages/volunteer/volunteer.js
const { apiHost } = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
      page: "1",
      rows: "10",
      success:[],
      arrays:[
        {
          name:"dd",
          age:4
        },{
          name:"ee",
          age:5
        },{
          name:"ff",
          age:6
        }
      ],
      isShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
  },
  getList() {
    let params = {
      page: this.data.page,
      rows: this.data.rows,
    };
    wx.request({
      url:
        apiHost +
        `/prod-api/api/volunteerActivity/list?page=${params.page}&rows=${params.rows}`,
      data: params,
      method: "POST",
      success: (res) => {
        console.log(res,'res')
        if (res.data.code == 200) {
          res.data.data.forEach((element) => {
            element.banner = "http://8.141.48.40:81" + element.banner;
          });
          this.setData({
            success: res.data.data,
          });
        }
      },
    });
  },
  change(data){
    let type = +data.currentTarget.dataset.type
    switch (type) {
      case 0:
        this.setData({
          isShow:false
        });
        break;
      case 1:
        this.setData({
          isShow:true
        });
        break;

      default:
        break;
    }
  },
  goto(){
    wx.navigateTo({
      url: "/pages/volunteer/volunteersignup/volunteersignup",
    });
  }
})