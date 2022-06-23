/*
 * @Author: wangni
 * @LastEditTime: 2021-03-08 11:17:14
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store/store';
import router from './router/router';
import './assets/css/common.scss';

import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;

import 'xe-utils';
import VXETable from "vxe-table";
import 'vxe-table/lib/index.css';

import BinfoTeamfeVxeModal from '@binfo-teamfe/vxe-modal';

Vue.use(VXETable);
Vue.use(ElementUI);
Vue.use(BinfoTeamfeVxeModal);

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');
