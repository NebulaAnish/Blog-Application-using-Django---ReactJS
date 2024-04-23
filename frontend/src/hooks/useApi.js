import { useCallback, useState } from "react";
import axiosInstance from "../utils/axios";

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (url) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(url);
      setData(response.data);
      setError("");
      return response?.data;
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
    return null;
  }, []);

  const post = async (url, newData) => {
    try {
      setLoading(true);
      const res = await axiosInstance.post(url, newData);
      setError("");
      return res.data;
    } catch (err) {
      setError("Error updating data");
    } finally {
      setLoading(false);
    }
  };

  const patch = async (url, id, newData) => {
    try {
      setLoading(true);
      const res = await axiosInstance.patch(`${url}/${id}/`, newData);
      setError("");
      return res.data;
    } catch (err) {
      setError("Error updating data");
    } finally {
      setLoading(false);
    }
  };

  const update = async (url, id, newData) => {
    try {
      setLoading(true);
      await axiosInstance.put(`${url}/${id}`, newData);
      setError("");
      await fetchData(url);
    } catch (err) {
      setError("Error updating data");
    } finally {
      setLoading(false);
    }
  };

  const remove = async (url, id) => {
    try {
      setLoading(true);
      const res = await axiosInstance.delete(`${url}/${id}`);
      setError("");
      return res.data;
    } catch (err) {
      setError("Error deleting data");
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, error, fetchData, post, update, remove, patch };
};

export default useApi;
