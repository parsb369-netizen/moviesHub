import { useEffect } from "react";
import useTvShowList from "../hooks/useTvShowList";
import TvShowCard from "./TvShowCard";

const TvShowList = () => {
  const { tvShows } = useTvShowList();
  console.log(tvShows);

  // SEO meta improvement
  useEffect(() => {
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Watch latest TV shows and web series online in HD. Explore trending, popular, and top-rated series updated daily."
      );
    }
  }, []);

  return (
    <div className="p-3 mb-4">

      {/* Improved SEO Heading */}
      <h1 className="text-4xl font-semibold p-5 py-8">
        Watch Latest TV Shows & Web Series Online in HD
      </h1>

      {/* SEO Description (visible) */}
      <p className="px-5 pb-4 text-gray-400 text-sm">
        Stream the latest TV shows and web series online in HD quality. Discover trending,
        popular, and top-rated series including drama, action, thriller, and comedy shows
        updated regularly.
      </p>

      {/* Hidden SEO keywords */}
      <div style={{ display: "none" }}>
        watch tv shows online, latest web series 2026, trending tv shows,
        stream series hd, popular netflix series, action shows, thriller series,
        comedy web series free streaming
      </div>

      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4 p-5">
        {tvShows?.map((tvShow: any) => (
          <div key={tvShow.id}>
            <TvShowCard tvShowResult={tvShow} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default TvShowList;