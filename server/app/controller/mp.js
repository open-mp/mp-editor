const Controller = require('egg').Controller;
const fs = require('fs-extra');
const path = require('path');
const zipdir = require('zip-dir');
const generatorDir = path.resolve(__dirname, '../../../../mp-workingspace');
const mpGenerator = require('mp-generator');

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

    async dynamicSettingHtml() {
        await this.ctx.render('mp/dynamic-setting.html', {});
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

    async getMpDynamicSetting() {
        let mpId = this.ctx.query.mpId;
        let mp = await this.service.mp.app.getMpDynamicSetting(mpId);
        this.ctx.body = {
            code: 0,
            data: mp
        };
    }

    async saveMpDynamicSetting() {
        let mpId = this.ctx.query.mpId;
        let definition = this.ctx.request.body;
        await this.service.mp.app.saveMpDynamicSetting(mpId, definition);
        this.ctx.body = {
            code: 0,
            data: {}
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
        let {mpId} = this.ctx.query;
        let mpPageList = await this.service.mp.page.getMpPageList(mpId);

        this.ctx.body = {
            code: 0,
            data: mpPageList
        };
    }

    async getMpStaticPageList() {
        let {mpId} = this.ctx.query;
        let mpPageList = await this.service.mp.page.getMpStaticPageList(mpId);

        this.ctx.body = {
            code: 0,
            data: mpPageList
        };
    }

    async getMpDynamicDefinition() {
        let {mpId} = this.ctx.query;
        let mpPageList = await this.service.mp.page.getMpDynamicDefinition(mpId);

        this.ctx.body = {
            code: 0,
            data: mpPageList
        };
    }

    async saveMpDynamicDefinition() {
        let {mpId} = this.ctx.query;
        let definition = this.ctx.request.body;
        await this.service.mp.page.saveMpDynamicDefinition(mpId, definition);

        this.ctx.body = {
            code: 0,
            data: {}
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
        let {pageId} = this.ctx.query;
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

    async getPageStructure() {
        let {pageId} = this.ctx.query;
        let page = await this.service.mp.page.getPageStructure(pageId);
        this.ctx.body = {
            code: 0,
            data: page
        };
    }

    async savePageStructure() {
        let {pageId} = this.ctx.query;
        let structure = this.ctx.request.body;
        await this.service.mp.page.savePageStructure(pageId, structure);
        this.ctx.body = {
            code: 0,
            data: {}
        };
    }

    async getMpContentList() {
        let {mpId} = this.ctx.query;
        let mpContentList = await this.service.mp.content.getMpContentList(mpId);

        this.ctx.body = {
            code: 0,
            data: mpContentList
        };
    }

    async getContentDetail() {
        let {contentId} = this.ctx.query;
        let content = await this.service.mp.content.getContentDetail(contentId);

        this.ctx.body = {
            code: 0,
            data: content
        };
    }

    async saveContentDetail() {
        let {contentId} = this.ctx.query;
        let content = this.ctx.request.body;
        await this.service.mp.content.saveContentDetail(contentId, content);

        this.ctx.body = {
            code: 0,
            data: {}
        };
    }

    async getMpDefinition() {
        let {mpId} = this.ctx.query;
        let mpDef = await this.service.mp.app.getMpDefinition(mpId);

        this.ctx.body = {
            code: 0,
            data: mpDef
        };
    }

    async getMpGenerate() {
        let {mpId} = this.ctx.query;
        let mpDef = await this.service.mp.app.getMpDefinition(mpId);
        let {mp} = mpDef;

        let mpDir = path.resolve(generatorDir, mp.id + '');
        await fs.remove(mpDir);
        let mpProjectDir = path.resolve(mpDir, 'project');
        let mpZipped = path.resolve(mpDir, 'project.zip');
        await fs.mkdirp(mpProjectDir);

        // 生成
        await mpGenerator.generate(mpProjectDir, JSON.parse(JSON.stringify(mpDef)));

        // 压缩
        await new Promise((resolve, reject) => {
            zipdir(mpProjectDir, {
                saveTo: mpZipped
            }, (err, buffer) => {
                if (err) {
                    reject(err)
                } else {
                    resolve();
                }
            });
        });
        this.ctx.set('Content-Disposition', `attachment;filename=project-${mpId}.zip`);
        // 文件返回
        this.ctx.body = fs.createReadStream(mpZipped);
    }
}

module.exports = UserController;
