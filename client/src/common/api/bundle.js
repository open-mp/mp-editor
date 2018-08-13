import * as api from './api';

export async function queryBundle({pageId, pageSize, pageNo, key}) {
    let result = await api.get('/bundle/query-bundle', {pageId, pageSize, pageNo, key});
    return result;
}
