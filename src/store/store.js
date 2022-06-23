import Vue from 'vue';
import Vuex from 'vuex';
import CancelRequest from "./cancel-request";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        setUser(state, val) {
            state.user = val;
        }
    },
    actions: {
        setUser({commit}, val) {
            commit('setUser', val);
        }
    },
    modules: {
        CancelRequest
    }
});

export default store;
