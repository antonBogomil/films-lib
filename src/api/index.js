import {API_BASE_URL} from "../constants";

export default {
    get: (url, params) => {
        return
    },
    post: (url, params) => {
        return _httpReq(url, params)
    }
};




const _httpReq = (url, params) => fetch(`${API_BASE_URL}/${url}`, params)
    .then(res => {
        console.log(res);
        if (res.ok) {
            return res.json();
        } else {
            throw new Error(res.status);
        }
    })
    .then(json => {
        console.log(json);
    })
    .catch(err => {
        console.warn('Get request error', err);
    });
