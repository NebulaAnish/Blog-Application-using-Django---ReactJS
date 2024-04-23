import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axios';

import { BACKEND_URL } from '../config-global';

const useFetchBlog = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const fetchBlog = async () => {
    try {
        setLoading(true);
        const response = await axiosInstance.get('/blogs/?page=1');
        setData(response.data);
        setError(null);
    } catch (error) {
        setError(error);
    } finally {
        setLoading(false);
    }};

    useEffect(() => {
        fetchBlog();
    }, []);
    
    return { data, loading, error };
    }


export default useFetchBlog;
