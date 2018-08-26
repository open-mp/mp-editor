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
    router.get('/mp/dynamic-setting', controller.mp.dynamicSettingHtml);
    router.get('/mp/page-list', controller.mp.pageListHtml);
    router.get('/mp/page-detail', controller.mp.pageDetailHtml);
    router.get('/mp/content-list', controller.mp.contentListHtml);

    router.get('/mp/get-mp-list', controller.mp.getMpList);
    router.get('/mp/get-dynamic-setting', controller.mp.getMpDynamicSetting);
    router.post('/mp/save-dynamic-setting', controller.mp.saveMpDynamicSetting);
    router.get('/mp/get-mp-detail', controller.mp.getMpDetail);
    router.post('/mp/save-mp-detail', controller.mp.saveMpDetail)

    router.get('/mp/get-mp-page-list', controller.mp.getMpPageList);
    router.get('/mp/get-mp-page-static-list', controller.mp.getMpStaticPageList);

    router.get('/mp/get-mp-page-dynamic-definition', controller.mp.getMpDynamicDefinition);
    router.post('/mp/save-mp-page-dynamic-definition', controller.mp.saveMpDynamicDefinition);

    router.get('/mp/get-mp-page-detail', controller.mp.getPageDetail);
    router.post('/mp/save-mp-page-detail', controller.mp.savePageDetail);

    router.get('/mp/get-mp-page-structure', controller.mp.getPageStructure);
    router.post('/mp/save-mp-page-structure', controller.mp.savePageStructure);

    router.get('/mp/get-mp-content-list', controller.mp.getMpContentList);
    router.get('/mp/get-mp-content-detail', controller.mp.getContentDetail);
    router.post('/mp/save-mp-content-detail', controller.mp.saveContentDetail);

    router.get('/mp/get-mp-definition', controller.mp.getMpDefinition);
    router.get('/mp/get-mp-generate', controller.mp.getMpGenerate);
    // 编辑器
    router.get('/editor/mp', controller.editor.mpHtml);

    // bundle插件
    router.get('/bundle/get-url/mpeditor-plugin', controller.bundle.getMpEditorPluginUrl);
    router.get('/bundle/get-js/mpeditor-plugin', controller.bundle.getMpEditorPluginJsContent);
    router.get('/bundle/get-css/mpeditor-plugin', controller.bundle.getMpEditorPluginCssContent);
    router.get('/bundle/query-bundle', controller.bundle.queryBundleList);
};
