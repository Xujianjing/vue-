import Vue from 'vue';
import axios from 'axios';
import {getCookie} from '../utiles/token';
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'http://localhost:3000';
}
if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'http://www.lb717.com';
}
var httpPlugin = {
    install (Vue) {
        let Case1 = axios.create();
        let Case2 = axios.create({
            headers: {
                'Authorization': '',
                'user': ''
            }
        });
        Case2.interceptors.request.use((config) => {
            // 发请求之前做什么
           let token =  getCookie('token');
           config.headers.user = localStorage.getItem('userName');
           config.headers.Authorization = token;
            return config;
        }, (error) => {
            // 返回错误信息
            return Promise.reject(error)
        })
        Object.defineProperty(Vue.prototype, '$http', {
            value: Case1
        });
        Object.defineProperty(Vue.prototype, '$http_token', {
            value: Case2
        })
    }
};
Vue.use(httpPlugin);
