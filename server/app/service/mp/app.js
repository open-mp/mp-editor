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
            if (tabBar.pageType == 'static') {
                let page = await this.service.mp.page.getPageDetail(tabBar.pageId);
                tabBar.pageName = page.name;
            }
        }

        let pageList = await this.service.mp.page.getMpPageList(mpId);
        // 为page组装instanceList字段, bundleList字段
        for (let page of pageList) {
            page.instanceList = await this.service.mp.page.getInstanceList(page.id);

        }
        let dynamic = JSON.parse(JSON.stringify(dynamicPage[mpId]));
        let bundleList = dynamic.bundleList;
        let newBundleList = [];
        for (let id of bundleList) {
            let b = await this.service.bundle.bundle.getBundle(id);
            newBundleList.push(b);
        }
        dynamic.bundleList = newBundleList;
        return {
            mp, pageList, dynamic
        };
    }

    async getMpDynamicSetting(mpId) {
        return dynamicPage[mpId] || {
            mpId: mpId, // 关联的小程序id
            config: {
                "navigationBarBackgroundColor": "#ffffff",
                "navigationBarTextStyle": "black",
                "navigationBarTitleText": "微页面",
                "backgroundColor": "#eeeeee",
                "backgroundTextStyle": "light"
            },
            bundleList: [1, 2, 3, 4, 5, 6]
        }
    }

    async saveMpDynamicSetting(mpId, definition) {
        dynamicPage[mpId] = definition;
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
        "pageType": "static",
        "contentId": "",
        "iconUrl": '',
        "selectedIconUrl": "",
        "text": "国庆活动"
    }, {
        "pageId": 2,
        "pageName": "",
        "pageType": "dynamic",
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
    },
    dynamic: {}
}];


let dynamicPage = {
    1: {
        mpId: 1, // 关联的小程序id
        config: {
            "navigationBarBackgroundColor": "#ffffff",
            "navigationBarTextStyle": "black",
            "navigationBarTitleText": "微页面",
            "backgroundColor": "#eeeeee",
            "backgroundTextStyle": "light"
        },
        bundleList: [1, 2, 3, 4, 5, 6]
    }
}