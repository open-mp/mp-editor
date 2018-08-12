const Controller = require('egg').Controller;

class BundleController extends Controller {
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
        let {
            groupId,
            artifactId,
            version,
            classifier
        } = this.ctx.query;
        // 计算bundle在本地的存放路径

        // 读取bundle的配置文件，拼接mp editor插件路径

        // 返回插件
    }
}

module.exports = BundleController;
