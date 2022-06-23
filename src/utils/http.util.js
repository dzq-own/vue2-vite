import axios from './axios.instance'


/**
 * @param url
 * @param pager 是否为分页
 * @returns {Promise<AxiosResponse<any>>}
 */
export function doGet(url, pager=false, config={}) {
    if (url.indexOf("//") === 0) {
        url = url.replace("//", "/")
    }
    return axios.get(window.BASE_URL + url, {
        pager,
        showError: true,
        ...config
    });
}

/**
 * @param url
 * @param data
 * @param pager 是否为分页
 * @returns {Promise<AxiosResponse<any>>}
 */
export function doPost(url, data, pager=false, config={}) {
    if (url.indexOf("//") === 0) {
        url = url.replace("//", "/")
    }
    return axios.post(window.BASE_URL + url, data, {
        pager,
        showError: true,
        ...config
    });
}
