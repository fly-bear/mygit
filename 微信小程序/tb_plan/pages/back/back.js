Page({
  data: {
    showModalStatus: false
  },
  powerDrawer: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
  },
  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例   
    var animation = wx.createAnimation({
      duration: 200,  //动画时长  
      timingFunction: "linear", //线性  
      delay: 0  //0则不延迟  
    });

    // 第2步：这个动画实例赋给当前的动画实例  
    this.animation = animation;

    // 第3步：执行第一组动画  
    animation.opacity(0).rotateX(-100).step();

    // 第4步：导出动画对象赋给数据对象储存  
    this.setData({
      animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后，执行第二组动画  
    setTimeout(function () {
      // 执行第二组动画  
      animation.opacity(1).rotateX(0).step();
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象  
      this.setData({
        animationData: animation
      })

      //关闭  
      if (currentStatu == "close") {
        this.setData(
          {
            showModalStatus: false
          }
        );
      }
    }.bind(this), 200)

    // 显示  
    if (currentStatu == "open") {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
  },

  test:function(e){
    this.setData(
      {
        showModalStatus: false
      }
    );
    console.log(e.detail.value)
    wx.request({  //生成新优惠券
      url: 'https://www.flybear.wang/tb/newcoupons',
      data:{
        "number":e.detail.value.number,
        "money": e.detail.value.money,
        "openid":getApp().globalData.userId
      },
      method:"POST",
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success:function(res){
        console.log(res.data)
        if(res.data=="faild"){
          wx.showModal({
            title: '创建失败！',
            content: '权限不足',
            showCancel: false,
          })
        }else{
          wx.showModal({
            title: '创建成功！',
            content: '请保存或分享二维码',
            showCancel:false,
            success:function(e){
              wx.navigateTo({//生成发放二维码
                url: '../ewm/ewm?wz=' + res.data,
              })
            }
          })
        }
      }
    })
  },

  NotGot: function () {
    wx.request({  //获取当前所有未领取优惠券
      url: 'https://www.flybear.wang/tb/allnotgot',
      data:{
        openid: getApp().globalData.userId
      },
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        var tempdata = []
        for (var index in res.data) {
          tempdata.push({
            sl: res.data[index].number,//数量
            je: res.data[index].money,//金额
            ewm: res.data[index].batch//批次
          })
        }
        wx.navigateTo({
          url: '../notgot/notgot?data=' + JSON.stringify(tempdata),//转向表格显示页面
        })
      }
    })
} ,


usecoupon:function(){
  wx.scanCode({
    onlyFromCamera: false,
    success: (res) => {
        //res.result
        wx.request({
          url: 'https://www.flybear.wang/tb/usecoupon',
          data:{
            coupon:res.result
          },
          header: { 'content-type': 'application/x-www-form-urlencoded' },
          method:"POST",
          success:function(res){
            console.log(res.data)
            if(res.data.result!=0){
              wx.showModal({
                title:res.data.name+'的优惠券使用成功!', 
                content: "金额："+res.data.money+"元",
                showCancel: false,
              })
            }else{
              wx.showModal({
                title: '使用失败!',
                content: "无此优惠券或已使用",
                showCancel: false,
              })
            }
          }
        })
    }
  })
}




})