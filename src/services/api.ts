import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localiza-grupo5.azurewebsites.net/api/',

});

api.defaults.headers.common['Content-Type'] = 'application/json';


export default api;
