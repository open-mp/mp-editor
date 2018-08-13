const Controller = require('egg').Controller;


const MPList = [{
    id: 1,
    name: '测试小程序',
    description: '用来测试的小程序'
}]; // 小程序列表
const MPConfig = {
    1: {
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
};// 小程序配置
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
        instanceList: []
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
        bundleList: []
    }]; // 小程序的页面列表
const DynamicContent = [{
    id: 1,
    pageId: 2, // 关联的动态页id
    instanceList: []
}];

class UserController extends Controller {

    async listHtml() {
        await this.ctx.render('mp/list.html', {});
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
        let mpContentList = DynamicContent.filter(content => {
            return content.pageId == pageId;
        });
        this.ctx.body = {
            code: 0,
            data: mpContentList
        };
    }
}

module.exports = UserController;
