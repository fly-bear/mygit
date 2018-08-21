//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        //发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: 'https://cloud.bmob.cn/87f918105e676e61/gotid',
          data:{
            code:res.code 
          },
          method: 'GET',
          success:e => {
            console.log(e.data.openid)

            this.globalData.userId = e.data.openid


            //--------验证管理员-------//
            wx.request({
              url: 'http://localhost/tb/checkadmin',
              data: {
                openid: this.globalData.userId
              },
              header: { 'content-type': 'application/x-www-form-urlencoded' },
              success: res => {
                this.globalData.isadmin = res.data
                if (this.isadmincallback) {
                  this.isadmincallback(res)
                }

              }
            })

            if (this.userIdReadyCallback) {
              this.userIdReadyCallback(e)
            }
          }
        })
        console.log(res.code)
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo


              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })


    


  },
  globalData: {
    userInfo: null,
    userId:null,
    isadmin:null
  }
})