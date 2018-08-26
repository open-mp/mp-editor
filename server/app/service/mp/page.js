const Service = require('egg').Service;
const _ = require('lodash')

class UserService extends Service {
    async getMpPageList(mpId) {
        let mpPageList = Pages.filter(page => {
            return page.mpId == mpId;
        });
        return mpPageList;
    }

    async getMpStaticPageList(mpId) {
        let mpPageList = Pages.filter(page => {
            return page.mpId == mpId && page.type == 'static';
        });
        return mpPageList;
    }




    async createPage(mpId, page) {
        let pageId = Date.now();
        Pages.push({
            mpId: mpId, // 关联的小程序id
            id: pageId, // 页面id
            name: page.name,
            label: page.label,
            description: page.description,
            type: page.type,
            config: {
                "navigationBarBackgroundColor": "#ffffff",
                "navigationBarTextStyle": "black",
                "navigationBarTitleText": page.name,
                "backgroundColor": "#eeeeee",
                "backgroundTextStyle": "light"
            },
            bundleList: [],
        });
        if (page.type == "static") {
            pageInstanceMap[pageId] =
                [{
                    "title": `${page.label}`,
                    "color": "",
                    "description": "",
                    "coordinate": {"groupId": "tsxuehu", "artifactId": "config", "version": "1.0.0"}
                }];
        }

    }

    async getPageDetail(pageId) {
        let page = Pages.find(page => {
            return page.id == pageId;
        })
        return page;
    }

    async savePageDetail(page) {
        let newPages = Pages.map(v => {
            if (v.id != page.id) return v;
            return _.merge(v, page);
        })
        Pages = newPages;
    }

    async getPageStructure(pageId) {
        let page = Pages.find(page => {
            return page.id == pageId;
        })
        page.instanceList = pageInstanceMap[page.id];
        return page;
    }

    async savePageStructure(pageId, structure) {
        pageInstanceMap[pageId] = structure;
    }

    async getInstanceList(pageId) {
        return pageInstanceMap[pageId] || [];
    }
}

module.exports = UserService;

// 页面
let Pages = [
    {
        mpId: 1, // 关联的小程序id
        id: 3, // 页面id
        name: 'order',
        label: '下单',
        description: '',
        type: 'static',
        config: {
            "navigationBarBackgroundColor": "#ffffff",
            "navigationBarTextStyle": "black",
            "navigationBarTitleText": "微信接口功能演示",
            "backgroundColor": "#eeeeee",
            "backgroundTextStyle": "light"
        },
        bundleList: []
    },
    {
        mpId: 1, // 关联的小程序id
        id: 1, // 页面id
        name: 'goods-detail',
        label: '商品详情页',
        description: '',
        type: 'static',
        config: {
            "navigationBarBackgroundColor": "#ffffff",
            "navigationBarTextStyle": "black",
            "navigationBarTitleText": "微信接口功能演示",
            "backgroundColor": "#eeeeee",
            "backgroundTextStyle": "light"
        },
        bundleList: []
    }, {
        mpId: 1, // 关联的小程序id
        id: 4, // 页面id
        name: 'cart',
        label: '购物车',
        description: '',
        type: 'static',
        config: {
            "navigationBarBackgroundColor": "#ffffff",
            "navigationBarTextStyle": "black",
            "navigationBarTitleText": "微信接口功能演示",
            "backgroundColor": "#eeeeee",
            "backgroundTextStyle": "light"
        },
        bundleList: []
    }];

let pageInstanceMap = {
    1: [{
        "title": "商品详情",
        "color": "",
        "description": "",
        "coordinate": {"groupId": "tsxuehu", "artifactId": "config", "version": "1.0.0"}
    }, {
        "color": "#f9f9f9",
        "content": "<p>商品信息</p>",
        "fullscreen": 0,
        "coordinate": {"groupId": "tsxuehu", "artifactId": "richtext", "version": "1.0.0"}
    }, {
        "color": "#e5e5e5",
        "hasPadding": false,
        "lineType": "solid",
        "coordinate": {"groupId": "tsxuehu", "artifactId": "line", "version": "1.0.0"}
    }, {
        "height": 30,
        "coordinate": {"groupId": "tsxuehu", "artifactId": "goods-detail", "version": "1.0.0"}
    },
        {"height": 30, "coordinate": {"groupId": "tsxuehu", "artifactId": "goods-action", "version": "1.0.0"}}],
    3: [{
        "title": "下单",
        "color": "",
        "description": "",
        "coordinate": {"groupId": "tsxuehu", "artifactId": "config", "version": "1.0.0"}
    }, {
        "color": "#f9f9f9",
        "content": "<p>下单</p>",
        "fullscreen": 0,
        "coordinate": {"groupId": "tsxuehu", "artifactId": "richtext", "version": "1.0.0"}
    }, {
        "color": "#e5e5e5",
        "hasPadding": false,
        "lineType": "solid",
        "coordinate": {"groupId": "tsxuehu", "artifactId": "line", "version": "1.0.0"}
    }],
    4: [{
        "title": "购物车",
        "color": "",
        "description": "",
        "coordinate": {"groupId": "tsxuehu", "artifactId": "config", "version": "1.0.0"}
    }, {
        "color": "#f9f9f9",
        "content": "<p>购物车</p>",
        "fullscreen": 0,
        "coordinate": {"groupId": "tsxuehu", "artifactId": "richtext", "version": "1.0.0"}
    }, {
        "color": "#e5e5e5",
        "hasPadding": false,
        "lineType": "solid",
        "coordinate": {"groupId": "tsxuehu", "artifactId": "line", "version": "1.0.0"}
    }]

}


