const Controller = require('egg').Controller;
const Bundle = require('../utils/bundle');
const path = require('path');
const fs = require('fs-extra');

let base = path.join(__dirname,'../../../../bundle');
let pathMap = {
    "tsxuehu-config-1.0.0": 'config',
    "tsxuehu-image-ad-1.0.0": 'image-ad',
    "tsxuehu-richtext-1.0.0": 'richtext',
    "tsxuehu-line-1.0.0": 'line',
    "tsxuehu-whitespace-1.0.0": 'whitespace',
    "tsxuehu-goods-action-1.0.0": 'goods-action',
    "tsxuehu-goods-detail-1.0.0": 'goods-detail',
}

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
        let bundle = new Bundle(this.ctx.query);
        let id = bundle.getStringId();
        let bundlePath = path.join(base, pathMap[id]);
        let metaJsonContent = await fs.readFile(path.join(bundlePath,'bundle.json'));
        let metaJson = JSON.parse(metaJsonContent);
        this.ctx.body = {
            code: 0,
            data: {
                metaJson,
                jsUrl: `/bundle/get-js/mpeditor-plugin?id=${bundle.getStringId()}`,
                cssUrl: `/bundle/get-css/mpeditor-plugin?id=${bundle.getStringId()}`
            }
        };
    }



    /**
     * 返回插件内容，本地开发用
     */
    async getMpEditorPluginJsContent() {
        let {
            id
        } = this.ctx.query;
        // 计算bundle在本地的存放路径
        let bundlePath = path.join(base, pathMap[id]);
        let metaJsonContent = await fs.readFile(path.join(bundlePath,'bundle.json'));
        let metaJson = JSON.parse(metaJsonContent);
        // 读取bundle的配置文件，拼接mp editor插件路径
        let pluginPath = path.join(bundlePath, metaJson.mpEditorPluginJs);
        this.ctx.set("content-type","application/javascript; charset=utf-8");
        // 返回插件
        this.ctx.body = fs.createReadStream(pluginPath);
    }

    async getMpEditorPluginCssContent() {
        let {
            id
        } = this.ctx.query;
        // 计算bundle在本地的存放路径
        let bundlePath = path.join(base, pathMap[id]);
        let metaJsonContent = await fs.readFile(path.join(bundlePath,'bundle.json'));
        let metaJson = JSON.parse(metaJsonContent);
        // 读取bundle的配置文件，拼接mp editor插件路径
        let pluginPath = path.join(bundlePath, metaJson.mpEditorPluginCss);
        this.ctx.set("content-type","text/css; charset=utf-8");
        // 返回插件
        this.ctx.body = fs.createReadStream(pluginPath);
    }

    async queryBundleList() {

        let {pageId, key, pageSize = 10, pageNo = 1} = this.ctx.query;
        let bundleList = await this.service.bundle.bundle.getBundleList();
        this.ctx.body = {
            code: 0,
            data: bundleList
        }
    }
}

module.exports = BundleController;
