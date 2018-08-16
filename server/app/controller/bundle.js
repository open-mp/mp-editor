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

    async queryBundleList() {
        let {pageId, key, pageSize = 10, pageNo = 1} = this.ctx.query;
        this.ctx.body = {
            code: 0,
            data: {
                total: 4,
                list: [
                    {
                        name: '页面配置',
                        bundleId: {
                            groupId: 'org.tsxuemu.bundle.example',
                            artifactId: 'config',
                            version: '1.0.0',
                            classifier: ''
                        }
                    },
                    {
                        name: '图片广告',
                        bundleId: {
                            groupId: 'org.tsxuemu.bundle.example',
                            artifactId: 'image-ad',
                            version: '1.0.0',
                            classifier: ''
                        }
                    },
                    {
                        name: '富文本',
                        bundleId: {
                            groupId: 'org.tsxuemu.bundle.example',
                            artifactId: 'richtext',
                            version: '1.0.0',
                            classifier: ''
                        }
                    },
                    {
                        name: '分隔符',
                        bundleId: {
                            groupId: 'org.tsxuemu.bundle.example',
                            artifactId: 'line',
                            version: '1.0.0',
                            classifier: ''
                        }
                    },
                    {
                        name: '空白行',
                        bundleId: {
                            groupId: 'org.tsxuemu.bundle.example',
                            artifactId: 'whitespace',
                            version: '1.0.0',
                            classifier: ''
                        }
                    }
                ]
            }
        }
    }
}

module.exports = BundleController;
