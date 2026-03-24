import { Card, CardContent } from "./ui/card";
import { useNavigate } from "react-router-dom";

interface Props {
  tvShowResult: any;
}

const TvShowCard = ({ tvShowResult }: Props) => {
  const navigate = useNavigate();

  const title = tvShowResult.name ? tvShowResult.name : tvShowResult.title;
  const imageUrl = `https://image.tmdb.org/t/p/w500${tvShowResult.poster_path}`;

  return (
    <Card
      className="border-0 shadow-md hover:scale-105 transition cursor-pointer"
      onClick={() => navigate(`/player/${tvShowResult.id}?type=tv`)}
    >
      <CardContent className="p-0">

        {/* SEO Optimized Image */}
        <img
          src={imageUrl}
          alt={`Watch ${title} TV show online in HD`}
          loading="lazy"
          className="w-full rounded-lg hover:opacity-30 transition-all"
        />

        {/* Title (SEO optimized) */}
        <h2 className="mt-3 font-medium text-sm px-1">
          {title}
        </h2>

        {/* Hidden SEO Description */}
        <p style={{ display: "none" }}>
          Watch {title} full TV show online in HD quality. Stream latest web series,
          trending shows, drama, action, thriller, and comedy series for free.
        </p>

      </CardContent>
    </Card>
  );
};

export default TvShowCard;