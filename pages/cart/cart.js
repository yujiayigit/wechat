// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:'',
    test:[]
  },

getValue :function(){
  this.setData({
   inputValue :wx.getStorageSync('a')
  })

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  request:function(){
    var that = this;
    var id = '85923';
    var sign = 'c6f3cc004db440cdadbce5bdf1f45233';
    wx.request({
      url: 'https://route.showapi.com/341-1',
      data:{
        showapi_appid: id,
        showapi_sign:sign
      },
      success:function(e){
        that.setData({
          test:e.data.showapi_res_body.contentlist
        })
        
      }
    });
    console.log(this.data.test);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})