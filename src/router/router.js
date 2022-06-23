import VueRouter from 'vue-router'
import Vue from 'vue'
import store from "../store/store";
import NProcess from 'nprogress'

Vue.use(VueRouter);

let routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        name: 'index',
        path: '/index',
        component: () => import('../views/home/index')
    },
    {
        name: 'page',
        path: '/page',
        component: () => import('../views/home/index'),
        children: [
            {
                name: 'page-1',
                path: 'page-1',
                component: () => import('../views/page/page-1')
            },
            {
                name: 'page-2',
                path: 'page-2',
                component: () => import('../views/page/page-2')
            }
        ]
    }
];

let router = new VueRouter({
    routes
});

router.beforeEach(((to, from, next) => {
    NProcess.start();
    store.commit('clearToken');
    next();
}))


// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
    NProcess.done();
})

export default router;
