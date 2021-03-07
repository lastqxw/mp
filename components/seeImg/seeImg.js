// components/seeImg/seeImg.js
import { isArr,isObj, isImg, isVideo} from '../../utils/util.js';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    urlList:{
      type:Array,
      value:[],
      observer: function (newVal, oldVal) {
        const vm = this;
        console.log('newVal')
        console.log(newVal)
        console.log(oldVal)
        let images = [], videos = [];
        if (isArr(newVal)){
          newVal.forEach(da=>{
            if (isObj(da)){
              for (var key in da) {
                if (isImg(da[key])) {
                  images.push(da[key])
                }
                if (isVideo(da[key])) {
                  videos.push(da[key])
                }
              }
            }else{
              if (isImg(da)) {
                images.push(da)
              }
              if (isVideo(da)) {
                videos.push(da)
              }
            }
          })
          vm.setData({
            images: images,
            videos: videos
          })
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    images:[],
    videos:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    seeImg(e) {
      const vm = this;
      wx.previewImage({
        current: e.currentTarget.dataset.img,
        urls: vm.data.images
      })
    },
  }
})
