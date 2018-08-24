const Service = require('egg').Service;
const _ = require('lodash')
class UserService extends Service {
    async getMpList() {
        return MPList;
    }
    async getMpDetail(mpId) {
        return MPList.find(mp => mp.id == mpId);
    }

    async saveMpDetail(mpId, mp) {
       let newList = MPList.map(v=>{
           if (v.id != mpId) return v;
           return _.merge(v, mp);
       })
       MPList = newList;
    }
}

module.exports = UserService;


// 小程序列表
const MPList = [{
    id: 1,
    name: '测试小程序',
    description: '用来测试的小程序',
    window: {
        "backgroundColor": "#F6F6F6",
        "backgroundTextStyle": "light",
        "navigationBarBackgroundColor": "#FFFFFF",
        "navigationBarTitleText": "小程序测试",
        "navigationBarTextStyle": "black"
    },
    tabBar: {
        color: '#000000',
        selectedColor: '#F70606',
        backgroundColor: '#ffffff',
        borderStyle: 'black',
        position: 'bottom',
    },
    tabBarButtons: [{
        "pageId": 1,
        "pageName": "",
        "pageStructure": "",
        "contentId": "",
        "iconUrl": '',
        "selectedIconUrl": "",
        "text": "国庆活动"
    }, {
        "pageId": 1,
        "pageName": "",
        "pageStructure": "",
        "contentId": "",
        "iconUrl": '',
        "selectedIconUrl": "",
        "text": "爆品"
    }],
    pageUtil: {
        "groupId": "tsxuehu",
        "artifactId": "page-util",
        "version": "1.0.0",
        "classifier": ""
    }
}];
