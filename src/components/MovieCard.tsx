import { Card, CardContent } from "./ui/card";
import type { Movie } from "../hooks/useMovies";
import { useNavigate } from "react-router-dom";

interface Props {
  movieResult: Movie;
}

const MovieCard = ({ movieResult }: Props) => {
  const navigate = useNavigate(); // FIX 1

  const imageUrl = `https://image.tmdb.org/t/p/w500${movieResult.poster_path}`;

  return (
    <Card
      className="border-0 shadow-md hover:scale-105 transition"
      onClick={() => {
        navigate(`/player/${movieResult.id}`); // FIX 2
      }}
    >
      <CardContent className="p-0">
        <img
          src={imageUrl}
          alt={movieResult.title}
          className="w-full rounded-lg hover:opacity-30 transition-all"
        />
        <h1 className="mt-3">
          {movieResult.title ? movieResult.title : movieResult.name}
        </h1>
      </CardContent>
    </Card>
  );
};

export default MovieCard;