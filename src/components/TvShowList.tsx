import useTvShowList from "../hooks/useTvShowList";
import TvShowCard from "./TvShowCard";

const TvShowList = () => {
  const { tvShows } = useTvShowList();
  console.log(tvShows);

  return (
    <div className="p-3 mb-4">
      <h1 className="text-4xl font-semibold p-5 py-8">TvShows</h1>
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