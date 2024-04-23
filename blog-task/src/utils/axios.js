import axios from 'axios';
import { BACKEND_URL } from '../config-global';

const axiosInstance = axios.create({
    baseURL: BACKEND_URL
});

export default axiosInstance;