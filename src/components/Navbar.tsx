import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Input } from "./ui/input";
import { useContext, useState } from "react";
import Genres from "./Genres";
import { SearchResultContext } from "../context/searchResult.context";

const Navbar = () => {
  const { searchText, setsearchText, setSearchData } =
    useContext(SearchResultContext) as any;

  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setsearchText(value);
    console.log("Typing:", value);

    if (value.length === 0) {
      navigate("/movies");
      return;
    }

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${value}`
      );

      const data = await response.json();

      // 🔥 FULL RESPONSE
      console.log("FULL RESPONSE:", data);

      // 🔥 ALL RESULTS ARRAY
      console.log("ALL RESULTS:", data.results);

      // 🔥 LOG EACH RESULT OBJECT WITH ALL FIELDS
      data.results.forEach((item: any, index: number) => {
        console.log(`Result ${index + 1}:`, item);
      });

      // Save results in context
      setSearchData(data.results);

    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchText.length > 0) {
      navigate(`/search/${searchText}`);
    } else {
      navigate("/movies");
    }
  };



  return (
    <div className="flex justify-between md:px-10 sm:px-5 px-5 items-center gap-3 text-xl my-3">
      <img
        src={logo}
        alt="logo"
        className="md:h-14 sm:h-9 h-9 hover:opacity-50 cursor-pointer"
        onClick={() => navigate("/")}
      />

      <div className="flex gap-3 items-center">
        <form onSubmit={handleSubmit}>
          <Input
            value={searchText}
            onChange={handleChange}
            placeholder="Search"
            className="border-gray-500 rounded-2xl md:w-fit sm:w-[30vw]"
          />
        </form>

        <div className="md:block sm:hidden hidden">
          <div className="flex gap-6 items-center">
            <Genres />
            <Link to={"/movies"}>
              <div>Movies</div>
            </Link>
            <Link to={"/tvshows"}>
              <div>TvShows</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;