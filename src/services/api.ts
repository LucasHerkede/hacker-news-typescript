import axios  from 'axios';

const api = axios.create({
    baseURL: 'https://api.hackerwebapp.com'
})

export default api;