import { useContext } from "react";
import useMovieList from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import { GenresContext } from "../context/genres.context";

const MovieList = () => {
  const {genres} = useContext(GenresContext);
  const { movieList } = useMovieList(genres);

  return (
    <div className="p-3 mb-4">
        <h1 className="text-4xl font-semibold p-5 py-8">Movies</h1>
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4 p-5">
      {movieList?.map((movie) => (
        <MovieCard key={movie.id} movieResult={movie} />
      ))}
    </div>
    </div>
  );
};

export default MovieList;