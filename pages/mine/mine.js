// pages/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  userInfo:''
  },

  getUserInfo: function (e) {
    var infoStr = JSON.parse(e.detail.rawData)
    console.log(infoStr)
    this.setData({
      userInfo: infoStr
    })
  }

  
})