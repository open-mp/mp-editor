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

    async pageDetailHtml() {
        await this.ctx.render('mp/page-detail.html', {});
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
        let mp = await this.service.mp.app.getMpDetail(mpId);
        this.ctx.body = {
            code: 0,
            data: mp
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
        let mpPageList = await this.service.mp.page.getMpPageList(mpId);
        
        this.ctx.body = {
            code: 0,
            data: mpPageList
        };
    }

    async getMpStaticPageList() {
        let { mpId } = this.ctx.query;
        let mpPageList = await this.service.mp.page.getMpStaticPageList(mpId);

        this.ctx.body = {
            code: 0,
            data: mpPageList
        };
    }

    async getMpDynamicPageList() {
        let { mpId } = this.ctx.query;
        let mpPageList = await this.service.mp.page.getMpDynamicPageList(mpId);

        this.ctx.body = {
            code: 0,
            data: mpPageList
        };
    }

    async createPage() {
        let {mpId} = this.ctx.query;
        let page = this.ctx.request.body;
        await this.service.mp.page.createPage(mpId, page);
        this.ctx.body = {
            code: 0,
            data: {}
        };
    }

    async getPageDetail() {
        let { pageId } = this.ctx.query;
        let page = await this.service.mp.page.getPageDetail(pageId);
        this.ctx.body = {
            code: 0,
            data: page
        };
    }
    
    async savePageDetail() {
        let page = this.ctx.request.body;
        await this.service.mp.page.savePageDetail(page);
        this.ctx.body = {
            code: 0,
            data: {}
        };
    }
    async  getPageStructure() {
        let { pageId } = this.ctx.query;
        let page = await this.service.mp.page.getPageStructure(pageId);
        this.ctx.body = {
            code: 0,
            data: page
        };
    }

    async getMpDynamicPageContentList() {
        let { pageId } = this.ctx.query;
        let mpContentList = await this.service.mp.content.getMpDynamicPageContentList(pageId);

        this.ctx.body = {
            code: 0,
            data: mpContentList
        };
    }

    async getContentDetail() {
        let { contentId } = this.ctx.query;
        let content = await this.service.mp.content.getContentDetail(contentId);

        this.ctx.body = {
            code: 0,
            data: content
        };
    }

    async getMpDefinition() {
        let { mpId } = this.ctx.query;
        let mpDef =  await this.service.mp.app.getMpDefinition(mpId);

        this.ctx.body = {
            code: 0,
            data: mpDef
        };
    }
}

module.exports = UserController;
