import { Card, CardContent } from "./ui/card";
import { useNavigate } from "react-router-dom";

interface Props {
  tvShowResult: any; // you can type it more strictly later if you have a TV show type
}

const TvShowCard = ({ tvShowResult }: Props) => {
  const navigate = useNavigate();

  const imageUrl = `https://image.tmdb.org/t/p/w500${tvShowResult.poster_path}`;

  return (
    <Card
      className="border-0 shadow-md hover:scale-105 transition cursor-pointer"
      onClick={() => navigate(`/player/${tvShowResult.id}?type=tv`)} // add query param to distinguish TV vs movie
    >
      <CardContent className="p-0">
        <img
          src={imageUrl}
          alt={tvShowResult.name || tvShowResult.title}
          className="w-full rounded-lg hover:opacity-30 transition-all"
        />
        <h1 className="mt-3">
          {tvShowResult.name ? tvShowResult.name : tvShowResult.title}
        </h1>
      </CardContent>
    </Card>
  );
};

export default TvShowCard;