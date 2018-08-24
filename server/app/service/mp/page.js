const Service = require('egg').Service;
class UserService extends Service {
    async getMpPageList(mpId) {
        let mpPageList = Pages.filter(page => {
            return page.mpId == mpId;
        });
        return mpPageList;
    }

    async getPageDetail(pageId) {
        let page = Pages.find(page => {
            return page.id == pageId;
        })
        return page;
    }

    async savePageDetail(mpId, page) {
        if (page.id) {

        } else {
            Pages.push({
                mpId: mpId, // 关联的小程序id
                id: Date.now(), // 页面id
                name: page.name,
                label: page.label,
                description: page.description,
                structure: page.structure,
                config: {
                    "navigationBarBackgroundColor": "#ffffff",
                    "navigationBarTextStyle": "black",
                    "navigationBarTitleText": page.label,
                    "backgroundColor": "#eeeeee",
                    "backgroundTextStyle": "light"
                },
                bundleList: [],
                instanceList: [{ "title": `${page.label}`, "color": "", "description": "", "bundleId": { "groupId": "tsxuehu", "artifactId": "config", "version": "1.0.0", "classifier": "" } }]

            });
        }
    }
}

module.exports = UserService;

// 页面
const Pages = [
    {
        mpId: 1, // 关联的小程序id
        id: 1, // 页面id
        name: 'goods-detail',
        label: '商品详情页',
        description: '',
        structure: 'static',
        config: {
            "navigationBarBackgroundColor": "#ffffff",
            "navigationBarTextStyle": "black",
            "navigationBarTitleText": "微信接口功能演示",
            "backgroundColor": "#eeeeee",
            "backgroundTextStyle": "light"
        },
        instanceList: [{ "title": "商品详情", "color": "", "description": "", "bundleId": { "groupId": "tsxuehu", "artifactId": "config", "version": "1.0.0", "classifier": "" } }, { "color": "#f9f9f9", "content": "<p>商品信息</p>", "fullscreen": 0, "bundleId": { "groupId": "tsxuehu", "artifactId": "richtext", "version": "1.0.0", "classifier": "" } }, { "color": "#e5e5e5", "hasPadding": false, "lineType": "solid", "bundleId": { "groupId": "tsxuehu", "artifactId": "line", "version": "1.0.0", "classifier": "" } }]
    },
    {
        mpId: 1, // 关联的小程序id
        id: 2, // 页面id
        name: 'weizhazhi',
        label: '微页面',
        description: '',
        structure: 'dynamic',
        config: {
            "navigationBarBackgroundColor": "#ffffff",
            "navigationBarTextStyle": "black",
            "navigationBarTitleText": "微信接口功能演示",
            "backgroundColor": "#eeeeee",
            "backgroundTextStyle": "light"
        },
        bundleList: [{
            "id": 1,
            "bundleId": {
                "groupId": "",
                "artifactId": "",
                "version": "",
                "classifier": ""
            }
        }]
    }, {
        mpId: 1, // 关联的小程序id
        id: 3, // 页面id
        name: 'order',
        label: '下单',
        description: '',
        structure: 'static',
        config: {
            "navigationBarBackgroundColor": "#ffffff",
            "navigationBarTextStyle": "black",
            "navigationBarTitleText": "微信接口功能演示",
            "backgroundColor": "#eeeeee",
            "backgroundTextStyle": "light"
        },
        instanceList: [{ "title": "下单", "color": "", "description": "", "bundleId": { "groupId": "tsxuehu", "artifactId": "config", "version": "1.0.0", "classifier": "" } }, { "color": "#f9f9f9", "content": "<p>下单</p>", "fullscreen": 0, "bundleId": { "groupId": "tsxuehu", "artifactId": "richtext", "version": "1.0.0", "classifier": "" } }, { "color": "#e5e5e5", "hasPadding": false, "lineType": "solid", "bundleId": { "groupId": "tsxuehu", "artifactId": "line", "version": "1.0.0", "classifier": "" } }]
    }, {
        mpId: 1, // 关联的小程序id
        id: 4, // 页面id
        name: 'cart',
        label: '购物车',
        description: '',
        structure: 'static',
        config: {
            "navigationBarBackgroundColor": "#ffffff",
            "navigationBarTextStyle": "black",
            "navigationBarTitleText": "微信接口功能演示",
            "backgroundColor": "#eeeeee",
            "backgroundTextStyle": "light"
        },
        instanceList: [{ "title": "购物车", "color": "", "description": "", "bundleId": { "groupId": "tsxuehu", "artifactId": "config", "version": "1.0.0", "classifier": "" } }, { "color": "#f9f9f9", "content": "<p>购物车</p>", "fullscreen": 0, "bundleId": { "groupId": "tsxuehu", "artifactId": "richtext", "version": "1.0.0", "classifier": "" } }, { "color": "#e5e5e5", "hasPadding": false, "lineType": "solid", "bundleId": { "groupId": "tsxuehu", "artifactId": "line", "version": "1.0.0", "classifier": "" } }]
    }];