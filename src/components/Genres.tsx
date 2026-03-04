import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { useContext, useState } from "react";
import { GenresContext } from "../context/genres.context";
import { useNavigate } from "react-router-dom";

const genreList = [
  {
    genres: [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 16, name: "Animation" },
      { id: 35, name: "Comedy" },
      { id: 80, name: "Crime" },
      { id: 99, name: "Documentary" },
      { id: 18, name: "Drama" },
      { id: 10751, name: "Family" },
      { id: 14, name: "Fantasy" },
      { id: 36, name: "History" },
      { id: 27, name: "Horror" },
      { id: 10402, name: "Music" },
      { id: 9648, name: "Mystery" },
      { id: 10749, name: "Romance" },
      { id: 878, name: "Science Fiction" },
      { id: 10770, name: "TV Movie" },
      { id: 53, name: "Thriller" },
      { id: 10752, name: "War" },
      { id: 37, name: "Western" },
    ],
  },
];

const Genres = () => {
  const { genres, setGenres } = useContext(GenresContext);
  const [genreName, setGenreName] = useState<string | undefined>();
  const navigate = useNavigate();

  const onChange = (data: string) => {
    setGenres(Number(data));
    navigate("/movies");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {genreName ? genreName : "Genres"}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={genres?.toString()}
          onValueChange={onChange}
        >
          {genreList[0].genres.map((genre) => (
            <DropdownMenuRadioItem
              key={genre.id}
              onClick={() => setGenreName(genre.name)}
              value={genre.id.toString()}
            >
              {genre.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Genres;