const Controller = require('egg').Controller;

class EditorController extends Controller {
    /**
     * 保存bundle
     */
    async saveBundle() {
        let {bundleId, name, description, uri, type} = this.ctx.request.body;
    }


    /**
     * 删除bundle
     */
    async removeBundle() {

    }

    /**
     * 获取插件url,告诉小程序编辑器到哪加载插件代码
     */
    async getMpEditorPluginUrl() {
        let {
            groupId,
            artifactId,
            version,
            classifier
        } = this.ctx.query;
        return ``;

    }

    /**
     * 返回插件内容，本地开发用
     */
    async getMpEditorPluginContent() {

    }
}

module.exports = EditorController;
