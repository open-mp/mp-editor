import * as api from './api';

export async function getMpList() {
    let result = await api.get('/mp/get-mp-list', {});
    return result;
}

export async function getMpDetail(mpId) {
    let result = await api.get('/mp/get-mp-detail', {mpId});
    return result;
}

export async function saveMp(mpId, mp) {
    let result = await api.post('/mp/save-mp-detail', {mpId}, mp);
    return result;
}

export async function getMpPageList(mpId) {
    let result = await api.get('/mp/get-mp-page-list', {mpId});
    return result;
}

export async function getMpStaticPageList(mpId) {
    let result = await api.get('/mp/get-mp-page-static-list', {mpId});
    return result;
}

export async function getMpDynamicSetting(mpId) {
    let result = await api.get('/mp/get-dynamic-setting', {mpId});
    return result;
}

export async function saveMpDynamicSetting(mpId, definition) {
    let result = await api.post('/mp/save-dynamic-setting', {mpId}, definition);
    return result;
}

export async function getMpDynamicPageList(mpId) {
    let result = await api.get('/mp/get-mp-page-dynamic-list', {mpId});
    return result;
}

export async function getMpPageStructure(pageId) {
    let result = await api.get('/mp/get-mp-page-structure', {pageId});
    return result;
}

export async function saveMpPageStructure(pageId, structure) {
    let result = await api.post('/mp/save-mp-page-structure', {pageId}, structure);
    return result;
}

export async function getMpPageDetail(pageId) {
    let result = await api.get('/mp/get-mp-page-detail', {pageId});
    return result;
}

export async function saveMpPageDetail(page) {
    let result = await api.post('/mp/save-mp-page-detail', {}, page);
    return result;
}


export async function getMpContentList(mpId) {
    let result = await api.get('/mp/get-mp-content-list', {mpId});
    return result;
}

export async function getContentDetail(contentId) {
    let result = await api.get('/mp/get-mp-content-detail', {contentId});
    return result;
}

export async function saveContentDetail(contentId, content) {
    let result = await api.post('/mp/save-mp-content-detail', {contentId}, content);
    return result;
}