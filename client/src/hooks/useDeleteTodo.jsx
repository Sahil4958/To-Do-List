import { useState, useCallback } from "react";
import axios from "axios";

const SERVER_URL = import.meta.env.VITE_API_URL;

const useDeleteTodo = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const makeRequest = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.delete(`${SERVER_URL}/delete/${id}`);
      setSuccess(response.data.success);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { makeRequest, success, loading, error };
};
export default useDeleteTodo;
