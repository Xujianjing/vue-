import axios from 'axios';
import Adapater from 'axios-mock-adapter';
import bannerImg from './data/banner.json';
export default {
    bootStrap () {
        const mock = new Adapater(axios);
        mock.onPost('/admin/banner').reply((config) => {
            console.log(config);
            return new Promise((resolve, reject) => {
                resolve([200, bannerImg]);
            });
        });
    }
}
