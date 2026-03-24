import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Player = () => {
    const { playerId } = useParams();
    const location = useLocation();

    // Read query params
    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get('type') || 'movie';

    // Construct the URL dynamically
    const streamUrl =
        type === 'tv'
            ? `https://vidsrc-embed.ru/embed/tv/${playerId}`
            : `https://vidsrc-embed.ru/embed/movie/${playerId}`;

    // SEO Improvements
    useEffect(() => {
        const titleText =
            type === 'tv'
                ? "Watch TV Show Online in HD | Movies Hub"
                : "Watch Movie Online in HD | Movies Hub";

        document.title = titleText;

        let meta = document.querySelector("meta[name='description']");
        if (meta) {
            meta.setAttribute(
                "content",
                type === 'tv'
                    ? "Watch TV shows and web series online in HD. Stream latest episodes, trending series, and popular shows."
                    : "Watch movies online in HD quality. Stream latest Bollywood and Hollywood movies free."
            );
        }
    }, [type]);

    return (
        <div>

            {/* ✅ GAME CHANGER (VISIBLE SEO CONTENT) */}
            <h1 className="text-xl font-semibold p-3">
                {type === 'tv'
                    ? "Watch TV Show Online in HD"
                    : "Watch Movie Online in HD"}
            </h1>

            <p className="px-3 text-sm text-gray-400">
                {type === 'tv'
                    ? "Stream latest TV shows and web series online in HD quality. Watch trending and popular series easily."
                    : "Watch latest Bollywood and Hollywood movies online in HD quality. Stream action, thriller, and trending films easily."}
            </p>

            {/* Hidden SEO keywords */}
            <div style={{ display: "none" }}>
                {type === 'tv'
                    ? "watch tv shows online free, latest web series hd, trending tv shows, stream series online"
                    : "watch movies online free hd, latest bollywood hollywood movies, action thriller films streaming"}
            </div>

            <iframe
                className="w-full h-screen"
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                src={streamUrl}
                title={type === 'tv' ? "TV Show Player" : "Movie Player"}
            ></iframe>

        </div>
    );
};

export default Player;