/**
 * 动态加载小程序组件编辑器
 */
import react from 'react'
import * as zent from 'zent'
import Bundle from './bundle'
import axios from 'axios'
import cx from 'classnames';

class MpEditorPluginLoader {
    init() {
        this.pluginMap = {};
        let define = window.define;
        window.requirejs.config({
            baseUrl: '/',
        });
        define('react', [], function () {
            return react;
        });
        define('zent', [], function () {
            return zent;
        })
        define('classnames', [], function () {
            return cx;
        })
    }

    async loadPlugin(bundleId) {
        let {pluginMap} = this;
        let bundle = new Bundle(bundleId);
        let bundleStringId = bundle.getStringId();
        // 检查是否存
        if (pluginMap[bundleStringId]) {
            return pluginMap[bundleStringId];
        }
        // 加载插件
        let plugin = await this.loadEditorPluginInternal(bundle);
        plugin = plugin.default ? plugin.default : plugin;
        // 找出plugin 并加载
        pluginMap[bundle.getStringId()] = plugin;
        return plugin;
    }

    getPluginByInstance(instance) {
        let bundleId = instance.bundleId;
        let bundle = new Bundle(bundleId);
        return this.pluginMap[bundle.getStringId()];
    }

    async loadEditorPluginInternal(bundle) {
        let query = bundle.getQueryObject();
        // 得到路径
        let urlResponse = await axios.get('/bundle/get-url/mpeditor-plugin', {
            params: query
        });
        // 加载css
        let head = document.getElementsByTagName("head")[0];
        let linkTag = document.createElement("link");
        linkTag.href = urlResponse.data.data.cssUrl;
        linkTag.setAttribute('rel', 'stylesheet');
        linkTag.setAttribute('type', 'text/css');
        head.appendChild(linkTag);
        // 加载js
        let url = urlResponse.data.data.jsUrl;
        return await new Promise((resolve, reject) => {
            window.require([url], (plugin) => {
                resolve(plugin);
            });
        })
    }
}

export default new MpEditorPluginLoader();
