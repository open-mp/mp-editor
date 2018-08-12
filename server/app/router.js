'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    // 用户
    router.get('/user/login', controller.user.login);

    // mp
    router.get('/mp/list', controller.mp.listHtml);
    router.get('/mp/detail', controller.mp.detailHtml);

    // 编辑器
    router.get('/editor/mp', controller.editor.mpHtml);

    // bundle插件
    router.get('/bundle/get-url/mpeditor-plugin', controller.bundle.getMpEditorPluginUrl);
    router.get('/bundle/get-js/mpeditor-plugin', controller.bundle.getMpEditorPluginContent);
};
