const Util = require('../../utils/util.js');
var Page =
  require('../../utils/xmadx_sdk.min.js').xmad(Page).xmPage;

Page({
    data: {
        xmad: {
          adData: {},
          ad: {
            banner: "xma1cf726a1765c85865799285bfbf3b",
            insert: "xm0e0f735afced8c36bfd51a6c8dd7e7",
            fixed:  "xmcb60897f5ca3225ed8afcd3119c97b",
          }
        }
    },
    onLoad() {
        wx.setNavigationBarTitle({
            title: '更多'
        });
    },
    // 定义转发
    onShareAppMessage: Util.shareConfig
});