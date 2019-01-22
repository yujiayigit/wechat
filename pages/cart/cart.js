// pages/cart/cart.js
var request = require('../../utils/JOKE.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    list:[],
    id:''
  },

  getValue: function() {
    this.setData({
      inputValue: wx.getStorageSync('a')
    })

  },

  request: function() {
    wx.showLoading({
      title: '正在加载',
    })
    request.request();
  var that = this;
  wx.getStorage({
    key: 'list',
    success: function(res) {
     that.setData({
       list:res.data
      }) 
    },
  });
  wx.hideLoading();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  clickJoke: function(e) {
    wx.showLoading({
      title: '正在加载',
    });
    
    var pageid = e.currentTarget.id;
    wx.setStorageSync('id', pageid)
    wx.hideLoading()
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})