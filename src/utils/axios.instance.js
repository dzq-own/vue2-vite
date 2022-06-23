import axios from 'axios';
import {ElMessage} from "element-ui";
import store from "../store/store";

let axiosInstance = axios.create({});
let messageInst = null;

axiosInstance.defaults.timeout = 60000;

let showErrorMessage = (msg) => {
    if (messageInst) {
        messageInst.close();
    }
    if (msg.indexOf("timeout") >= 0) {
        msg = "请求超时：" + msg
    }
    messageInst = ElMessage.error(msg);
}

axiosInstance.interceptors.request.use(request => {

    request.cancelToken = new axios.CancelToken(cancel => {
        store.commit('pushToken', {
            cancelToken: cancel
        })
    })
    return request;
})

axiosInstance.interceptors.response.use(response => {
    let config = response.config;
    let pager = config.pager;
    let showError = config.showError;
    if (response.status) {
        let data = response.data;
        if (data.status) {
            if (pager) {
                return Promise.resolve(data);
            } else {
                return Promise.resolve(data.data);
            }
        } else {
            handleErrorByCode(data);
            if (showError) {
                if (data.code == -1) {
                    showErrorMessage(data.msg);
                } else {
                    showErrorMessage("code=" + data.code + ":  " + data.msg);
                }
            }

            return Promise.reject(data.msg);
        }

    }
}, error => {
    let config = error.config;
    let errorMsg = "";
    if (error.response) {
        handleErrorByCode({
            code: error.response.status
        })
        errorMsg = error.response.status + ": " + error.response.statusText;
    } else if (error.message) {
        errorMsg = error.message;
    } else {
        errorMsg = error;
    }
    if (config.showError) {
        showErrorMessage(errorMsg);
    }
    return Promise.reject(errorMsg);
})


function handleErrorByCode({code}) {
    // if (302 === code) {
    //     channel.postMessage({
    //         event: CHANNEL_EVENT.ON_ERROR_302
    //     })
    // }
    // if (401 === code || '401' === code) {
    //     channel.postMessage({
    //         event: CHANNEL_EVENT.ON_HTTP_401
    //     })
    // }
}

export default axiosInstance;
