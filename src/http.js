import Vue from 'vue'
// import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import QS from 'qs'

Vue.use(VueAxios, axios)

// let BASE_URL = process.env.NODE_ENV == 'development' ?
//             '' : '';

axios.defaults.timeout = 50000

// axios.defaults.withCredentials = true;

axios.defaults.transformRequest = [function (data) {
    data = QS.stringify(data);
    return data;
}]


// http request 拦截器
axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (err) => {
        return Promise.reject(err);
    });


// http response 拦截器
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error)
    });


export default axios;



