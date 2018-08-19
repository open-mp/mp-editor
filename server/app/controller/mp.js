const Controller = require('egg').Controller;

// 小程序列表
const MPList = [{
    id: 1,
    name: '测试小程序',
    description: '用来测试的小程序',
    config: {
        window: {
            "backgroundColor": "#F6F6F6",
            "backgroundTextStyle": "light",
            "navigationBarBackgroundColor": "#F6F6F6",
            "navigationBarTitleText": "小程序模板",
            "navigationBarTextStyle": "black"
        },
        tabBar: {
            list: []
        }

    }
}]; 
// 页面
const Pages = [
    {
        mpId: 1, // 关联的小程序id
        id: 1, // 页面id
        name: '商品详情页',
        description: '',
        structure: 'static',
        config: {
            "navigationBarBackgroundColor": "#ffffff",
            "navigationBarTextStyle": "black",
            "navigationBarTitleText": "微信接口功能演示",
            "backgroundColor": "#eeeeee",
            "backgroundTextStyle": "light"
        },
        instanceList: [{"title":"商品详情","color":"","description":"","bundleId":{"groupId":"org.tsxuemu.bundle.example","artifactId":"config","version":"1.0.0","classifier":""}},{"color":"#f9f9f9","content":"<p>商品信息</p>","fullscreen":0,"bundleId":{"groupId":"org.tsxuemu.bundle.example","artifactId":"richtext","version":"1.0.0","classifier":""}},{"color":"#e5e5e5","hasPadding":false,"lineType":"solid","bundleId":{"groupId":"org.tsxuemu.bundle.example","artifactId":"line","version":"1.0.0","classifier":""}}]
    },
    {
        mpId: 1, // 关联的小程序id
        id: 2, // 页面id
        name: '微页面',
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
            groupId: '',
            artifactId: '',
            version: '',
            classifier: ''
        }]
    }, {
        mpId: 1, // 关联的小程序id
        id: 3, // 页面id
        name: '下单',
        description: '',
        structure: 'static',
        config: {
            "navigationBarBackgroundColor": "#ffffff",
            "navigationBarTextStyle": "black",
            "navigationBarTitleText": "微信接口功能演示",
            "backgroundColor": "#eeeeee",
            "backgroundTextStyle": "light"
        },
        instanceList: [{"title":"下单","color":"","description":"","bundleId":{"groupId":"org.tsxuemu.bundle.example","artifactId":"config","version":"1.0.0","classifier":""}},{"color":"#f9f9f9","content":"<p>下单</p>","fullscreen":0,"bundleId":{"groupId":"org.tsxuemu.bundle.example","artifactId":"richtext","version":"1.0.0","classifier":""}},{"color":"#e5e5e5","hasPadding":false,"lineType":"solid","bundleId":{"groupId":"org.tsxuemu.bundle.example","artifactId":"line","version":"1.0.0","classifier":""}}]
    }, {
        mpId: 1, // 关联的小程序id
        id: 4, // 页面id
        name: '购物车',
        description: '',
        structure: 'static',
        config: {
            "navigationBarBackgroundColor": "#ffffff",
            "navigationBarTextStyle": "black",
            "navigationBarTitleText": "微信接口功能演示",
            "backgroundColor": "#eeeeee",
            "backgroundTextStyle": "light"
        },
        instanceList: [{"title":"购物车","color":"","description":"","bundleId":{"groupId":"org.tsxuemu.bundle.example","artifactId":"config","version":"1.0.0","classifier":""}},{"color":"#f9f9f9","content":"<p>购物车</p>","fullscreen":0,"bundleId":{"groupId":"org.tsxuemu.bundle.example","artifactId":"richtext","version":"1.0.0","classifier":""}},{"color":"#e5e5e5","hasPadding":false,"lineType":"solid","bundleId":{"groupId":"org.tsxuemu.bundle.example","artifactId":"line","version":"1.0.0","classifier":""}}]
    }]; 
// 动态页内容列表
const DynamicContents = [{
    id: 1,
    pageId: 2, // 关联的动态页id
    name: '限时折扣专题',
    description: '',
    instanceList: [{"title":"限时折扣专题","color":"","description":"","bundleId":{"groupId":"org.tsxuemu.bundle.example","artifactId":"config","version":"1.0.0","classifier":""}},{"color":"#f9f9f9","content":"<p>限时折扣专题</p>","fullscreen":0,"bundleId":{"groupId":"org.tsxuemu.bundle.example","artifactId":"richtext","version":"1.0.0","classifier":""}},{"color":"#e5e5e5","hasPadding":false,"lineType":"solid","bundleId":{"groupId":"org.tsxuemu.bundle.example","artifactId":"line","version":"1.0.0","classifier":""}}]
}, {
    id: 2,
    pageId: 2, // 关联的动态页id
    name: '中秋活动',
    description: '',
    instanceList: [{"title":"中秋活动","color":"","description":"","bundleId":{"groupId":"org.tsxuemu.bundle.example","artifactId":"config","version":"1.0.0","classifier":""}},{"color":"#f9f9f9","content":"<p>中秋活动</p>","fullscreen":0,"bundleId":{"groupId":"org.tsxuemu.bundle.example","artifactId":"richtext","version":"1.0.0","classifier":""}},{"color":"#e5e5e5","hasPadding":false,"lineType":"solid","bundleId":{"groupId":"org.tsxuemu.bundle.example","artifactId":"line","version":"1.0.0","classifier":""}}]
}];

class UserController extends Controller {

    async listHtml() {
        await this.ctx.render('mp/list.html', {});
    }

    async settingHtml() {
        await this.ctx.render('mp/setting.html', {});
    }

    async detailHtml() {
        await this.ctx.render('mp/detail.html', {});
    }

    async pageListHtml() {
        await this.ctx.render('mp/page-list.html', {});
    }

    async contentListHtml() {
        await this.ctx.render('mp/content-list.html', {});
    }

    async getMpList() {
        this.ctx.body = {
            code: 0,
            data: MPList
        };
    }

    async getMpPageList() {
        let {mpId} = this.ctx.query;
        let mpPageList = Pages.filter(page => {
            return page.mpId == mpId;
        });
        this.ctx.body = {
            code: 0,
            data: mpPageList
        };
    }

    async getMpDynamicPageContentList() {
        let {pageId} = this.ctx.query;
        let mpContentList = DynamicContents.filter(content => {
            return content.pageId == pageId;
        });
        this.ctx.body = {
            code: 0,
            data: mpContentList
        };
    }

    async getPageDetail(){
        let {pageId} = this.ctx.query;
        let page = Pages.find(page=>{
            return page.id == pageId;
        })
        this.ctx.body = {
            code: 0,
            data: page
        };
    }

    async getContentDetail () {
        let {contentId} = this.ctx.query;
        let content = DynamicContents.find(content=>{
            return content.id == contentId;
        })
        this.ctx.body = {
            code: 0,
            data: content
        };
    }

    async getMpDefinition() {
        let {mpId} = this.ctx.query;
        let mp = MPList.find(mp=>{
            return mp.id == mpId;
        })

        let pageList = Pages.filter(page => {
            return page.mpId == mpId;
        });
        
        this.ctx.body = {
            code: 0,

            data: {
                mp, pageList
            }
        };
    }
}

module.exports = UserController;
