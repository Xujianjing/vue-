import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
Vue.use(Vuex);
let store = new Vuex.Store({
    state: {
        carList: [],
        sum: 0.00,
        count: 0,
        check_all: false,
        adsList: []
    },
    mutations,
    actions
});
export default store;
