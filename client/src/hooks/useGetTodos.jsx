import { useState, useEffect } from "react";
import axios from "axios";

const SERVER_URL = import.meta.env.VITE_API_URL;

const useGetTodos = () => {
  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchTodos = async () => {
    try {
      const response = await axios.get(SERVER_URL);
      setTodos(response.data.toDo);
    } catch (error) {
      console.log(error);
      setError(error.message)
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTodos();
  }, [todos]);
  return { todos, loading, error };
};
export default useGetTodos;
