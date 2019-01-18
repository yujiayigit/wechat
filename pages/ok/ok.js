Page({
  data: {
    showModalStatus: false,
    animationData: ''
  },
  onLoad: function () {

  },
  showModal: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration:200,
      timingFunction: "ease-in-out",
      delay: 0
    })
    this.animation = animation
    animation.translateY(500).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    }) 
    
     setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 20)
  
  },
  hideModal: function () {
    this.setData({
      showModalStatus: false,
    })

  }
})