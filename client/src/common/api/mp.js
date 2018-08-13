import * as api from './api';

export async function getMpList() {
    let result = await api.get('/mp/get-mp-list', {});
    return result;
}

export async function getMpPageList(mpId) {
    let result = await api.get('/mp/get-mp-page-list', {mpId});
    return result;
}
