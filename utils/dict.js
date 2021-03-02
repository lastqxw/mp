let dictIndex = "DICT_";
const { apiHost } = getApp().globalData;
export function getLocalStorage(name) {
  return wx.getStorageSync(name) || "null";
}

export function getDict(dictName) {
  if (dictName) {
    let fullName = dictIndex + dictName.toUpperCase();
    let result = [];
    if (wx.getStorageSync(fullName)) {
      result = getLocalStorage(fullName);
    } else {
      wx.request({
        url: apiHost + `/prod-api/api/dict/data/type/${dictName}`,
        method: "GET",
        success: function (res) {
          if (res.data) {
            wx.setStorageSync(fullName, res.data.data);
          }
        },
      });
    }
    return Promise.resolve(result);
  }
}

export function dictMain(dictName) {
  return getDict(dictName);
}
