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
        let newList = MPList.map(v => {
            if (v.id != mpId) return v;
            return _.merge(v, mp);
        });
        MPList = newList;
    }

    async getMpDefinition(mpId) {
        let mp = await this.getMpDetail(mpId);
        // tabBar
        let tabBarButtons = mp.tabBarButtons;
        for (let tabBar of tabBarButtons) {
            let page = await this.service.mp.page.getPageDetail(tabBar.pageId);
            tabBar.pageName = page.name;
        }

        let pageList = await this.service.mp.page.getMpPageList(mpId);
        // 为page组装instanceList字段, bundleList字段
        for (let page of pageList) {
            page.instanceList = await this.service.mp.page.getInstanceList(page.id);
            let bundleList = page.bundleList;
            let newBundleList = [];
            for (let id of bundleList) {
                let b = await this.service.bundle.bundle.getBundle(id);
                newBundleList.push(b);
            }
            page.bundleList = newBundleList;
        }
        return {
            mp, pageList
        };
    }

}

module.exports = UserService;


// 小程序列表
let MPList = [{
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
        "pageStructure": "static",
        "contentId": "",
        "iconUrl": '',
        "selectedIconUrl": "",
        "text": "国庆活动"
    }, {
        "pageId": 2,
        "pageName": "",
        "pageStructure": "dynamic",
        "contentId": 2,
        "iconUrl": '',
        "selectedIconUrl": "",
        "text": "爆品"
    }],
    pageUtil: {
        id: 1,
        coordinate: {
            "groupId": "tsxuehu",
            "artifactId": "page-util",
            "version": "1.0.0",
            "classifier": ""
        }
    }
}];
