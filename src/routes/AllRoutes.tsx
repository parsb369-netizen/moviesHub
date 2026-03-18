import MovieList from "../components/MovieList";
import { Route, Routes } from "react-router-dom";
import TvShowList from "../components/TvShowList";
import SearchList from "../components/SearchList";
import Trending from "../components/Trending/Trending";
import Player from "../components/Player";

const AllRoutes = () => {
        return (
        <Routes>
            <Route path="/" element ={<Trending />}  /> 
            <Route path = "/movies" element= {<MovieList/>} />
            <Route path = "/tvshows" element= {<TvShowList/>} />
            <Route path = "/search/:searchName/" element= {<SearchList />} />

            <Route path="/player/:playerId" element={<Player />} />
        </Routes>
        );
};

export default AllRoutes;