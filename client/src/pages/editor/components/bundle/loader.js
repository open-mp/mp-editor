/**
 * 动态加载小程序组件编辑器
 */
import react from 'react'
import zent from 'zent'

export default class MpEditorPluginLoader {
    pluginUrlMap = {};

    init() {
        let define = window.define;
        let require = window.require;
        require.config({
            paths: this.pluginUrlMap
        });
        define('react', [], function () {
            return react;
        });
        define('zent', [], function () {
            return zent;
        })
    }
}


export function loadMpEditorFromBundle(bundleId) {
    let {
        groupId, artifactId, version, classifier
    } = bundleDefinition;
    // 请求代理 获取js css

    // 使用requireJS加载

}

export function loadMpComponentFromBundle(bundleDefinition) {
    let {
        groupId, artifactId, version, classifier
    } = bundleDefinition;

}
