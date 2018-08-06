const datas = require('../../utils/data.js');
const Util = require('../../utils/util.js');
var Page =
  require('../../utils/xmadx_sdk.min.js').xmad(Page).xmPage;

Page({
    data: {
        // 需在 xmadID 中配置广广告位 ID ,多个 ID 之间用用英文文逗号隔开
        xmad: {
          adData: {},
          ad: {
            banner: "xma1cf726a1765c85865799285bfbf3b", // 按需引入入
          }
        },
        fromTitleList: false,
        fromShare: false,
        isLoading: true,
        searchKey: '', // 输入查询的关键字
        results: [], // 找寻到的列表
        datas: datas.dreamsData
    },
    // 查询数据库
    getData() {
        let arr = [],
            that = this,
            key = that.data.searchKey,
            datas = that.data.datas;

        wx.showLoading({
            title: '正在查询中',
            mask: true
        });

        for (let i in datas) {
            let item = datas[i];
            // break; // test
            if (item.title.indexOf(key) != -1) {
                arr.push(item);
                // break; //test
            }
        }

        that.setData({
            isLoading: false,
            results: arr
        });

        setTimeout(() => {
            wx.hideLoading();
        }, 300);
    },
    // 定义转发
    onShareAppMessage: function() {
        // 如果没有查到任何内容则分享首页吧
        if (this.data.results.length == 0) return Util.shareConfig();

        let key = this.data.searchKey,
            title = '梦到"' + key + '"原来是预示着...';

        return {
            title: title,
            path: '/pages/detail/detail?key=' + key + '&fromShare=true'
        }
    },
    onLoad: function(option) {
        this.setData({
            searchKey: option.key || '大风'
        });

        option.fromTitleList && this.setData({
            fromTitleList: true
        });

        option.fromShare && this.setData({
            fromShare: true
        });

        this.getData();
    }
});
