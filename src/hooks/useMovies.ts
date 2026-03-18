import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Movie {
  adult: boolean;
  id: number;
  original_language: string;
  original_title: string; // fixed spelling
  title: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  name?: string;
}


const useMovieList = (genres?: number | null) => {
  // ✅ must be an array
  const [movieList, setMovieList] = useState<Movie[]>([]);

  const fetchMovieList = async () => {
    try {
      const res = await apiClient.get("/discover/movie", {
        params : {
         with_genres : genres,
        },
      });
      setMovieList(res.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovieList();
  }, [genres]);

  return { movieList };
};

export default useMovieList;