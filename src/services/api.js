import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-guerra.onrender.com/'
})

export default api;