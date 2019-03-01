// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: '',
    longitude: '',
    scaleIndex: 9,
    scaleSize: 16,
    bigDisabled: false,
    smallDisabled: false,
    circles: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.reStar();
  },

  reStar: function() {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        var latitude = res.latitude // 纬度
        var longitude = res.longitude // 经度
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          circles: [{
            latitude: res.latitude,
            longitude: res.longitude,
            color: '#FF0000DD',
            fillColor: '#7cb5ec88',
            radius: 100,
            strokeWidth: 1
          }]
        });
      }
    })
    // this.getScaleSize(this.data.scaleIndex)
  },

  scMap: function(e) {
    var that = this;
    var id = e.target.id;
    this.mapContext = wx.createMapContext('map');
    this.mapContext.getScale({
      success:function(res){
      }
    })

    if (id == 1 && this.data.scaleSize < 18) {
      that.setData({
        scaleSize: ++this.data.scaleSize
      })
      that.setData({
        smallDisabled: false
      })
      if (this.data.scaleSize == 18){
        that.setData({
          bigDisabled: true
        })
      }
    } else if (id == 2 && this.data.scaleSize > 5) {
      that.setData({
        scaleSize: --this.data.scaleSize
      })
      that.setData({
        bigDisabled: false
      })
      if (this.data.scaleSize == 5) {
        that.setData({
          smallDisabled: true
        })
      }
    }
  },
  choose:function(){
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        console.log(res);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      },
    })
  }
})