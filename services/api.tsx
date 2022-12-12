import axios from 'axios';
import Cookies from 'js-cookie';

const url = {
    baseUrl: 'http://localhost:8000/api',
    auth: '/auth',
    gifts: '/gifts',
    winner: '/winners'
}

const instance = axios.create({
    baseURL: url.baseUrl,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
})

const api = {
    url,
    instance,
    get: instance.get,
    put: instance.put,
    delete: instance.delete,
    post: instance.post
}

instance.interceptors.request.use(async (config: any) => {
    config.headers.Authorization = `Bearer ${Cookies.get('USER_TOKEN')}`
    return config
})

instance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error?.response) {
        // window.location.href = '/no-internet';
    } else {
        // switch (error?.response?.status) {
        //     case 401: window.location.href = '/login'; break;
        //     case 403: window.location.href = '/no-permission'; break;
        //     default: break
        // }
    }
    return Promise.reject(error);
})


export default api;


