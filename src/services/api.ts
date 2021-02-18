import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localiza-grupo5.azurewebsites.net/api/',
});

export default api;
