import { useState, useCallback } from "react";
import axios from "axios";

const SERVER_URL = import.meta.env.VITE_API_URL;

const usePostTodos = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const makeRequest = useCallback(async (text, id) => {
    setLoading(true);
    setError(null);
    try {
      if (id) {
        const response = await axios.post(`${SERVER_URL}/update/${id}`, {
          text: text,
        });
        setSuccess(response.data.success);
      } else {
        const response = await axios.post(`${SERVER_URL}/create`, {
          text: text,
        });
        setSuccess(response.data.success);
      }

    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return { makeRequest, success, loading, error };
};
export default usePostTodos;
