/**
 * 动态加载小程序组件编辑器
 */
import react from 'react'
import * as zent from 'zent'
import Bundle from './bundle'
import axios from 'axios'
import cx from 'classnames';
import {DragDropContext, Droppable, Draggable}  from 'react-beautiful-dnd';

import isUndefined from 'lodash/isUndefined';
import isString from 'lodash/isString';
import isArray from 'lodash/isArray';
import isNumber from 'lodash/isNumber';
import isFunction from 'lodash/isFunction';
import isEmpty from "lodash/isEmpty";
import assign from "lodash/assign";
import find from "lodash/find";
import defaultTo from "lodash/defaultTo";
import findIndex from "lodash/findIndex";

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
        define('react-beautiful-dnd', [], function () {
            return {DragDropContext, Droppable, Draggable} ;
        })
        define('lodash', [], function () {
            return {
                isUndefined,
                isString,
                isArray,
                isNumber,
                isFunction,
                isEmpty,
                assign,
                find,
                defaultTo,
                findIndex
            };
        })
    }

    async loadPlugin(coordinate) {
        let {pluginMap} = this;
        let bundle = new Bundle(coordinate);
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
        let coordinate = instance.coordinate;
        let bundle = new Bundle(coordinate);
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
