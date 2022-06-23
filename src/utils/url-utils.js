import XEUtils from "xe-utils";
// import * as LocationUtils from 'binfo-teamfe-ui/utils/location-utils'

// http://localhost:8080/demo/#/home?id=123
// {
//   hash: '#/home?id=123',
//   hashKey: '/home',
//   hashQuery: {
//     id: '123'
//   },
//   host: 'localhost:8080',
//   hostname: 'localhost.com',
//   href: 'http://localhost:8080/demo/#/home?id=123',
//   origin: 'http://localhost:8080',
//   path: '/demo/',
//   pathname: '/demo/',
//   port: '8080',
//   protocol: 'http:',
//   search: '',
//   searchQuery: {}
// }

function parseUrl(url) {
    return XEUtils.parseUrl(url);
}

let UrlUtils = {
    /**
     * 解析URL
     */
    parseUrl: parseUrl,
    /**
     * 获取hash参数
     * @returns {any}
     */
    getUrlHashQuery: () => {
        let url = window.location.href;
        let data = parseUrl(url);
        return data.hashQuery;
    },
    /**
     * 获取Query参数
     * @returns {any}
     */
    getUrlSearchQuery: () => {
        let url = window.location.href;
        let data = parseUrl(url);
        return data.searchQuery;
    },
    getUrlHashQueryString: (key) => {
        let url = window.location.href;
        return UrlUtils.getUrlHashQuery(url)[key]
    },
    getUrlSearchQueryString: (key) => {
        let url = window.location.href;
        return UrlUtils.getUrlSearchQuery(url)[key]
    },
    getContextPath: () => {
        var pathName = window.document.location.pathname;
        var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
        return projectName;
    }
}

export default UrlUtils;
