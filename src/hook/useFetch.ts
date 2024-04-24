// custom hook: fetch data

import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

// Function
const useFetch = <T>(url: string) => {
  // State
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>("");

  // logic
  useEffect(() => {
    // logic
    axios
      .get(url)
      .then((response: AxiosResponse<T>) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error: AxiosError) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);

  // return
  return {
    data,
    setData,
    loading,
    error,
  };
};

export default useFetch;
