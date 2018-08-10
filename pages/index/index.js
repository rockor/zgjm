const Util = require('../../utils/util.js');
// ⻚页面面顶部引入入
var Page =
  require('../../utils/xmadx_sdk.min.js').xmad(require('../../utils/ald-stat.js').Page).xmPage;

const app = getApp();

Page({
  data: {
    // 需在 xmadID 中配置广广告位 ID ,多个 ID 之间用用英文文逗号隔开
    xmad: {
      adData: {},
      ad: {
        banner: "xmd9833780b01e76a29ab9dfbb13b9df", // 按需引入入
      }
    },
    // 您的其它数据
    // yourOtherData: {},
    searchKey: '', // 输入查询的关键字
  },

  onLoad:function(){
    
  },

  toOther:function(e) {
    app.aldstat.sendEvent('跳转小程序', {
      appId: e.currentTarget.id,
    })
  },

  // 检查输入内容
  checkData() {
    let key = this.data.searchKey;

    if (key == '') {
      wx.showModal({
        content: '搜索关键词为空',
        showCancel: false,
        confirmText: '我知道了',
        confirmColor: '#888'
      });
      return false;
    }

    return true;
  },
  // 执行搜索
  searchTap() {
    if (!this.checkData()) return;

    let key = this.data.searchKey;

    let index1 = key.indexOf('梦到了');

    if (index1 != -1) {
      key = key.substr(index1 + 3);
    }

    let index2 = key.indexOf('梦到');

    if (index2 != -1) {
      key = key.substr(index2 + 2);
    }

    wx.navigateTo({
      url: '../detail/detail?key=' + key
    });
  },
  // 搜索内容变动
  changeSearchKey(e) {
    let val = e.detail.value;

    this.setData({
      searchKey: val
    });
  },
  // 定义转发
  onShareAppMessage: Util.shareConfig
});