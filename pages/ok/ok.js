Page({
  data: {
    showModalStatus: false,
    animationData: '',//.export导出的动画
  },
  onLoad: function() {

  },

  showOrHide: function() {
    if (this.data.showModalStatus) { //判断当前是否隐藏，如果不是就调用隐藏方法
      this.hideView();
    } else {
      this.showView();
    }
  },

  showView: function() {
    wx.vibrateShort({
      success:function(){
console.log('震动')
      }
    })
    // 显示遮罩层
    var that = this;
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: "ease-in-out",
      delay: 0
    })
    animation.translateY(500).step()
    that.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function() {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export()
      })
    }.bind(this), 100);
  },

  hideView: function() {
    var that = this;
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: "ease-in-out",
      delay: 0
    })
    animation.translateY(500).step()
    that.setData({
      animationData: animation.export(),
    })
    setTimeout(function(){
      that.setData({
        showModalStatus: false
      })
    },500)
  },

  getHeight: function() {
    var query = wx.createSelectorQuery();
    //选择id
    var that = this;
    query.select('.commodity_attr_box').boundingClientRect(function(rect) {
      console.log(rect)
      /*that.setData({
        height: rect.width + 'px'
      })*/
    }).exec();
  }
})