import axios from 'axios';
import queryString from 'query-string';

export function get(url, query = {}) {
    let keylength = Object.keys(query).length;
    if (keylength > 0) {
        url = `${url}?${queryString.stringify(query)}`;
    }
    return axios.get(url).then(res => {
        let result = res.data;
        if (result.code == 0) {
            return result.data;
        } else {
            throw new Error(result.msg);
        }
    });
}

export function post(url, query = {}, data = {}) {

    query['_csrf'] = window.csrf;
    let keylength = Object.keys(query).length;
    if (keylength > 0) {
        url = `${url}?${queryString.stringify(query)}`;
    }
    return axios.post(url, data).then(res => {
        let result = res.data;
        if (result.code == 0) {
            return result.data;
        } else {
            throw new Error(result.msg);
        }
    });
}
