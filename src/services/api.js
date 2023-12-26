import axios from 'axios';

const api = axios.create({
    baseURL: 'https://indiki-api.onrender.com/'
})

export default api;