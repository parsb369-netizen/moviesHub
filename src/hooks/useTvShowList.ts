import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useTvShowList = () => {
  const [tvShows, setTvShows] = useState<any[]>([]);

  const fetchTvShowList = async () => {
    try {
      const res = await apiClient.get("/discover/tv");
      setTvShows(res.data.results);
    } catch (error) {}
  };

  useEffect(() => {
    fetchTvShowList();
  }, []);

  return { tvShows };
};

export default useTvShowList;