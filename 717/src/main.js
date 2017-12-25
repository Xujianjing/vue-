import Vue from 'vue';
import App from './App.vue';
import router from './router/routers.js';
import axios from './axios/axios';
import '../fonts/iconfont.css';
import '@/static/css/reset.css';
import store from './store/store.js';
import MIntUi from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css';
import message from '../src/utiles/message';
Vue.use(message);
// import bootStrap from '@/Mock/index';
// bootStrap.bootStrap();
Vue.use(MIntUi);
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
});
