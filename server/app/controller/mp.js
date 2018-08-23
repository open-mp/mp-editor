const Controller = require('egg').Controller;

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
        let mpList = await this.service.mp.app.getMpList();
        this.ctx.body = {
            code: 0,
            data: mpList
        };
    }

    async getMpDetail() {
        let mpId = this.ctx.query.mpId;
        let mpList = await this.service.mp.app.getMpDetail(mpId);
        this.ctx.body = {
            code: 0,
            data: mpList
        };
    }

    async saveMpDetail() {
        let mpId = this.ctx.query.mpId;
        let mp = this.ctx.request.body;
        let mpList = await this.service.mp.app.saveMpDetail(mpId, mp);
        this.ctx.body = {
            code: 0,
            data: mpList
        };
    }

    async getMpPageList() {
        let { mpId } = this.ctx.query;
        let mpPageList = Pages.filter(page => {
            return page.mpId == mpId;
        });
        this.ctx.body = {
            code: 0,
            data: mpPageList
        };
    }

    async getMpDynamicPageContentList() {
        let { pageId } = this.ctx.query;
        let mpContentList = DynamicContents.filter(content => {
            return content.pageId == pageId;
        });
        this.ctx.body = {
            code: 0,
            data: mpContentList
        };
    }

    async getPageDetail() {
        let { pageId } = this.ctx.query;
        let page = Pages.find(page => {
            return page.id == pageId;
        })
        this.ctx.body = {
            code: 0,
            data: page
        };
    }

    async getContentDetail() {
        let { contentId } = this.ctx.query;
        let content = DynamicContents.find(content => {
            return content.id == contentId;
        })
        this.ctx.body = {
            code: 0,
            data: content
        };
    }

    async getMpDefinition() {
        let { mpId } = this.ctx.query;
        let mp = MPList.find(mp => {
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
