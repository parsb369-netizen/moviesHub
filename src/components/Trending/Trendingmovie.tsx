import React, { useState } from "react";
import useTrendingList from "../../hooks/useTrendingList";
import { MdOutlineExpandMore } from "react-icons/md";
import MovieCard from "../MovieCard";

const TrendingMovie = () => {
  const { trendingData } = useTrendingList("movie");
  const [expand, setExpand] = useState(false);

  console.log(trendingData);

  return (
    <div className="p-3 mb-4">
      {/* Clickable header to toggle expansion */}
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setExpand(!expand)}
      >
        <h1 className="text-4xl font-semibold p-5 py-8">
          Trending Movie
        </h1>
        <span className="text-4xl text-gray-500">
          <MdOutlineExpandMore />
        </span>
      </div>

      {/* Movie grid */}
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4 p-5">
        {expand &&
          trendingData?.map((movie: any) => (
            <div key={movie.id}>
              <MovieCard movieResult={movie} />
            </div>
          ))}
        {!expand &&
          trendingData?.slice(0, 10).map((movie: any) => (
            <div key={movie.id}>
              <MovieCard movieResult={movie} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrendingMovie;