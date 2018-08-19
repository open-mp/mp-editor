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
    router.get('/mp/setting', controller.mp.settingHtml);
    router.get('/mp/detail', controller.mp.detailHtml);
    router.get('/mp/page-list', controller.mp.pageListHtml);
    router.get('/mp/content-list', controller.mp.contentListHtml);
    router.get('/mp/get-mp-list', controller.mp.getMpList);
    router.get('/mp/get-mp-page-list', controller.mp.getMpPageList);
    router.get('/mp/get-mp-dynamicpage-content-list', controller.mp.getMpDynamicPageContentList);

    router.get('/mp/get-mp-page-detail', controller.mp.getPageDetail);
    router.get('/mp/get-mp-content-detail', controller.mp.getContentDetail);
    router.get('/mp/get-mp-definition', controller.mp.getMpDefinition);
    // 编辑器
    router.get('/editor/mp', controller.editor.mpHtml);

    // bundle插件
    router.get('/bundle/get-url/mpeditor-plugin', controller.bundle.getMpEditorPluginUrl);
    router.get('/bundle/get-js/mpeditor-plugin', controller.bundle.getMpEditorPluginJsContent);
    router.get('/bundle/get-css/mpeditor-plugin', controller.bundle.getMpEditorPluginCssContent);
    router.get('/bundle/query-bundle', controller.bundle.queryBundleList);
};
