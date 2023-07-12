// pages/me/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // banner
    imgUrls: [
        '/images/carousel/zhixin1.png',
        '/images/carousel/banner3.png',
        '/images/carousel/zhixin2.png'
        ],
    height: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 4000,
    duration: 2000,
    userInfo: {
      nickName: "lebu"
    },
    nickName: "小依医",
    imageUrl: 'https://c-ssl.duitang.com/uploads/item/201708/01/20170801151835_scFm2.jpeg'
  },
  saveUserInfo(e){
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.setNavigationBarTitle({
      title: '我',
    })
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.setData({
                userInfo: res.userInfo
              });
            }
          })
        }
      }
    })
    
    

  },
  click(){
    this.vibrateFunc(1);
  },
  vibrateFunc(mode) {
    if(wx.getStorageSync('vibrate')){
      if(mode == 1){
        wx.vibrateShort({
          complete: (res) => {},
        })
      }

      if(mode == 2){
        wx.vibrateLong({
          complete: (res) => {},
        })
      }
    }
  },

})