const formatTime = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${[year, month, day].map(formatNumber).join("/")} ${[
    hour,
    minute,
    second,
  ]
    .map(formatNumber)
    .join(":")}`;
};

const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : `0${n}`;
};

// 判断参数是否为对象
function isObj(obj){
  return Object.prototype.toString.call(obj) === '[object Object]' && JSON.stringify(obj) !== '{}'
}

// 判断参数是否为对象
function isArr(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]' && arr.length>0
}

// 判断url是不是图片
function isImg(url) {
  return /^(http|https)\:(.*)(jpg|png|gif|jpeg)$/gi.test(url);
};
// 判断url是不是视频
function isVideo(url) {
  return /^(http|https)\:(.*)(mp4|mov|m4v|3gp|avi|m3u8)$/gi.test(url);
};
module.exports = {
  formatTime,
  isObj,
  isArr,
  isImg,
  isVideo

};
