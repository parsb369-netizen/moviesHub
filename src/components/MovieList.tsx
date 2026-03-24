import { useContext, useEffect } from "react";
import useMovieList from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import { GenresContext } from "../context/genres.context";

const MovieList = () => {
  const { genres } = useContext(GenresContext);
  const { movieList } = useMovieList(genres);

  // Extra SEO boost (safe, no structure change)
  useEffect(() => {
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Watch latest Bollywood and Hollywood movies online in HD. Browse action, thriller, comedy, and trending movies updated daily."
      );
    }
  }, []);

  return (
    <div className="p-3 mb-4">
      
      {/* Improved Heading */}
      <h1 className="text-4xl font-semibold p-5 py-8">
        Watch Latest Movies Online in HD
      </h1>

      {/* SEO Content (VISIBLE + IMPORTANT) */}
      <p className="px-5 pb-4 text-gray-400 text-sm">
        Explore and watch the latest Bollywood and Hollywood movies online in HD quality. 
        Discover trending, action, thriller, comedy, and popular films updated daily. 
        Stream your favorite movies easily and enjoy unlimited entertainment.
      </p>

      {/* Hidden SEO Keywords (Google reads this 👇) */}
      <div style={{ display: "none" }}>
        latest movies 2026, watch movies online free, bollywood movies hd,
        hollywood movies streaming, action movies, thriller movies, comedy films,
        trending movies online, free movie streaming website
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4 p-5">
        {movieList?.map((movie) => (
          <MovieCard key={movie.id} movieResult={movie} />
        ))}
      </div>

    </div>
  );
};

export default MovieList;