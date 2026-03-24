import { Card, CardContent } from "./ui/card";
import type { Movie } from "../hooks/useMovies";
import { useNavigate } from "react-router-dom";

interface Props {
  movieResult: Movie;
}

const MovieCard = ({ movieResult }: Props) => {
  const navigate = useNavigate();

  const title = movieResult.title ? movieResult.title : movieResult.name;
  const imageUrl = `https://image.tmdb.org/t/p/w500${movieResult.poster_path}`;

  return (
    <Card
      className="border-0 shadow-md hover:scale-105 transition cursor-pointer"
      onClick={() => {
        navigate(`/player/${movieResult.id}`);
      }}
    >
      <CardContent className="p-0">

        {/* SEO Optimized Image */}
        <img
          src={imageUrl}
          alt={`Watch ${title} full movie online in HD`}
          loading="lazy"
          className="w-full rounded-lg hover:opacity-30 transition-all"
        />

        {/* Title (important for SEO) */}
        <h2 className="mt-3 font-medium text-sm px-1">
          {title}
        </h2>

        {/* Hidden SEO Description (very important for indexing) */}
        <p style={{ display: "none" }}>
          Watch {title} full movie online in HD quality. Stream latest Bollywood
          and Hollywood movies, action, thriller, and trending films for free.
        </p>

      </CardContent>
    </Card>
  );
};

export default MovieCard;