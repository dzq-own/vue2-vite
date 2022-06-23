// import Cookies from 'js-cookie';
import XEUtils from "xe-utils";

const SessionStorageUtil = {
    set(key, val) {

        key = window.location.origin + "#" + key;

        if (null == val) {
            // Cookies.remove(key);
            sessionStorage.removeItem(key)
            return;
        }

        if ('object' === typeof val) {
            // Cookies.set(key, XEUtils.toJSONString(val));
            sessionStorage.setItem(key, XEUtils.toJSONString(val));
        } else {
            // Cookies.set(key, val);
            sessionStorage.setItem(key, val);
        }

    },
    get(key) {
        key = window.location.origin + "#" + key;
        // let val = Cookies.get(key);
        let val = sessionStorage.getItem(key);
        if (null == val || '' === val) {
            return null;
        }
        if (XEUtils.startsWith(val, '{') && XEUtils.endsWith(val, "}")) {
            return XEUtils.toStringJSON(val);
        }
        if (XEUtils.startsWith(val, "[") && XEUtils.endsWith(val, "]")) {
            return XEUtils.toStringJSON(val);
        }
        if ('true' === val) {
            return true;
        }
        if ('false' === val) {
            return false;
        }


        return val;
    },
    remove(key) {
        key = window.location.origin + "#" + key;
        // Cookies.remove(key);
        sessionStorage.removeItem(key)
    }

    // set(key, val) {
    //     console.log(key);
    //     console.log(val);
    //     XEUtils.cookie.set(key, val)
    // },
    // get(key) {
    //     return XEUtils.cookie.get(key)
    // },
    // remove(key) {
    //     XEUtils.cookie.remove(key)
    // }
}

export default SessionStorageUtil;
