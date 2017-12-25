import Vue from 'vue';
import Router from'vue-router';
import login from '@/views/login/login.vue';
import register from '@/views/register/register.vue';
import details from '@/views/details/details.vue';
import view from '@/views/user/view.vue';
import home from '@/views/user/home/home.vue';
import kind from '@/views/user/kind/kind.vue';
import social from '@/views/user/social/social.vue';
import car from '@/views/user/car/car.vue';
import my from '@/views/user/my/my.vue';
import search from '@/views/user/search/search.vue';
import order from '@/views/order/order.vue';
import address from '@/views/address/address.vue';
import setaddress from '@/views/setAddress/setaddress.vue';

Vue.use(Router);
const router = new Router({
    linkExactActiveClass: 'bg',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/details',
            name: 'details',
            component: details
        },
        {
            path: '/order',
            name: 'order',
            component: order
        },
        {
            path: '/address',
            name: 'address',
            component: address
        },
        {
            path: '/setaddress',
            name: 'setaddress',
            component: setaddress
        },
        {
            path: '/admin',
            name: 'admin',
            component: view,
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: home
                },
                {
                    path: 'kind',
                    name: 'kind',
                    component: kind
                },
                {
                    path: 'social',
                    name: 'social',
                    component: social
                },
                {
                    path: 'car',
                    name: 'car',
                    component: car
                },
                {
                    path: 'my',
                    name: 'my',
                    component: my
                },
                {
                    path: 'search',
                    name: 'search',
                    component: search
                }
            ]
        }
    ]
});

export default router;
