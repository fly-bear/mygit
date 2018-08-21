//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '略略略',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userId:{},
    IsAdmin:{}//验证管理员身份
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    if(app.globalData.userId){
      this.setData({
        userId: app.globalData.userId
      })


    }else{
      app.userIdReadyCallback = res => {
        this.setData({
          userId: res.data.openid
        })
        

      }
    }

    if(app.globalData.isadmin){
      this.setData({
        IsAdmin:app.globalData.isadmin
      })
    }else{
      app.isadmincallback = res =>{
        this.setData({
          IsAdmin:res.data
        })
      }
    }
    

  },

  onReady:function(e){
    
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  goto:function(){
    wx.request({  //获取当前openid用户的所有优惠券
      url: 'https://www.flybear.wang/tb/searchcoupons?openid=' + this.data.userId,
      success: function (res) {
        var tempdata=[]
        for(var index in res.data){
          tempdata.push({
            xh:parseInt(index)+1,
            je:res.data[index].money,
            ewm:res.data[index].coupon
          })
        }
        wx.navigateTo({
          url: '../search/search?data=' + JSON.stringify(tempdata),//转向表格显示页面
        })
      }
    })

    
    
  },

  scancode:function(){
    wx.scanCode({
      onlyFromCamera: false,
      success: (res) => {
        wx.request({//领取优惠券
          url: 'https://www.flybear.wang/tb/getcoupon',
          data:{
            batch:res.result,
            openid:this.data.userId,
            name: this.data.userInfo.nickName
          },
          header: { 'content-type': 'application/x-www-form-urlencoded' },
          success:function(res){
            var myicon=""
            if(res.data=="已被领取完！"){
              myicon="none"
              }
            else{
              myicon="success"
            }

            wx.showToast({
              title: res.data,
              icon:myicon
            })
          }
        })
      }
    })
  },

  gotoback:function(){
    wx.navigateTo({
      url: '../back/back',
    })
  }

})
