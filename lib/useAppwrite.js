import { useState, useEffect } from "react";
import { Alert } from "react-native";

const useAppwrite = (func) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await func();
      setData(response);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const refetch = () => fetchPosts();
  return { data, isLoading, refetch };
};

export default useAppwrite;
