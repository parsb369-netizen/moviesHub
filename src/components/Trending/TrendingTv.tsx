import React, { useState } from "react";
import useTrendingList from "../../hooks/useTrendingList";
import { MdOutlineExpandMore } from "react-icons/md";
import TvShowCard from "../TvShowCard";

const TrendingTvShows = () => {
  const { trendingData } = useTrendingList("tv");
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
          Trending TV Shows
        </h1>
        <span className="text-4xl text-gray-500">
          <MdOutlineExpandMore />
        </span>
      </div>

      {/* TV show grid */}
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4 p-5">
        {expand &&
          trendingData?.map((tvShow: any) => (
            <div key={tvShow.id}>
              <TvShowCard tvShowResult={tvShow} />
            </div>
          ))}
        {!expand &&
          trendingData?.slice(0, 10).map((tvShow: any) => (
            <div key={tvShow.id}>
              <TvShowCard tvShowResult={tvShow} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TrendingTvShows;