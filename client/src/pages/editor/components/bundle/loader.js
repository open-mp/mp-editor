/**
 * 动态加载小程序组件编辑器
 */
import react from 'react'
import * as zent from 'zent'
import Bundle from './bundle'
import axios from 'axios'

class MpEditorPluginLoader {
    init() {
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
    }

    async loadEditorPlugin(bundle) {
        let query = bundle.getQueryObject();
        // 得到路径
        let urlResponse = await axios.get('/bundle/get-url/mpeditor-plugin', {
            params: query
        });
        // 加载css
        let head = document.getElementsByTagName("head")[0];
        let linkTag =  document.createElement("link");
        linkTag.href = urlResponse.data.data.cssUrl;
        linkTag.setAttribute('rel','stylesheet');
        linkTag.setAttribute('type','text/css');
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
