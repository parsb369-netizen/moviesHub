import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import MovieList from "../components/MovieList";
import TvShowList from "../components/TvShowList";
import SearchList from "../components/SearchList";
import Trending from "../components/Trending/Trending";
import Player from "../components/Player";

// SEO Wrapper Component
const SEO = ({ title, description }: { title: string; description: string }) => {
  useEffect(() => {
    document.title = title;

    let meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
};

const AllRoutes = () => {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <>
            <SEO
              title="Trending Movies & TV Shows | Movies Hub"
              description="Watch trending movies and TV shows online in HD. Explore the latest and most popular content updated daily."
            />
            <Trending />
          </>
        }
      />

      <Route
        path="/movies"
        element={
          <>
            <SEO
              title="Watch Latest Movies Online | Movies Hub"
              description="Browse and watch latest Bollywood and Hollywood movies online in HD for free."
            />
            <MovieList />
          </>
        }
      />

      <Route
        path="/tvshows"
        element={
          <>
            <SEO
              title="Watch TV Shows Online | Movies Hub"
              description="Stream popular TV shows and series online in HD quality. Explore trending and latest episodes."
            />
            <TvShowList />
          </>
        }
      />

      <Route
        path="/search/:searchName/"
        element={
          <>
            <SEO
              title="Search Results | Movies Hub"
              description="Find your favorite movies and TV shows quickly. Search and watch online in HD."
            />
            <SearchList />
          </>
        }
      />

      <Route
        path="/player/:playerId"
        element={
          <>
            <SEO
              title="Watch Movie Online | Movies Hub"
              description="Watch movies online in HD quality. Fast streaming player with latest content."
            />
            <Player />
          </>
        }
      />

    </Routes>
  );
};

export default AllRoutes;