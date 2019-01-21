request();
function request () {
  var that = this;
  var id = '85923';
  var sign = 'c6f3cc004db440cdadbce5bdf1f45233';
  wx.request({
    url: 'http://route.showapi.com/341-1',
    data: {
      showapi_appid: id,
      showapi_sign: sign
    },
    success: function (e) {
      var list = e.data.showapi_res_body.contentlist;
      wx.setStorageSync('list', list)
    }
  });
}

module.exports = {
  request :request
}