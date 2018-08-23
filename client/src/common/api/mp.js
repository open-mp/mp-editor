import * as api from './api';

export async function getMpList() {
    let result = await api.get('/mp/get-mp-list', {});
    return result;
}

export async function getMpDetail(mpId) {
    let result = await api.get('/mp/get-mp-detail', {mpId});
    return result;
}

export async function getMpPageList(mpId) {
    let result = await api.get('/mp/get-mp-page-list', {mpId});
    return result;
}

export async function getDynamicPageContentList(pageId) {
    let result = await api.get('/mp/get-mp-dynamicpage-content-list', {pageId});
    return result;
}

export async function getPageDetail(pageId) {
    let result = await api.get('/mp/get-mp-page-detail', {pageId});
    return result;
}

export async function getContentDetail(contentId) {
    let result = await api.get('/mp/get-mp-content-detail', {contentId});
    return result;
}