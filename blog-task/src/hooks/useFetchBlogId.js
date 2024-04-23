import { useState, useEffect } from 'react';
import axiosInstance from '../utils/axios';

const useFetchBlogId = (id) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const fetchBlogId = async (id) => {
    try {
        setLoading(true);
        const response = await axiosInstance.get(`/blogs/${id}`);
        setData(response.data);
        setError(null);
    } catch (error) {
        setError(error);
    } finally {
        setLoading(false);
    }};

    useEffect(() => {
        fetchBlogId(id);
    }, [id]);
    
    return { data, loading, error };
    }

export default useFetchBlogId;
