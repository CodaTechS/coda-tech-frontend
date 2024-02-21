import axios from 'axios';

const instance = axios.create({
    baseURL: VUE_APP_API_URL || "http://localhost:4000"
});

export default instance
