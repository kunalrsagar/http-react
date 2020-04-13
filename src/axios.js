import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.interceptors.request.use(config => {
    console.log(config);
    return config;
});

instance.interceptors.response.use(success => {
    console.log(success);
    return success;
}, error => {
    console.log(error);
    return Promise.reject(error);
})


export default instance;