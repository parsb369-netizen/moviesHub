import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Player = () => {
    const { playerId } = useParams();
    const location = useLocation();

    // Read query params
    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get('type') || 'movie'; // default to movie

    // Construct the URL dynamically
    const streamUrl =
        type === 'tv'
            ? `https://vidsrc-embed.ru/embed/tv/${playerId}`
            : `https://vidsrc-embed.ru/embed/movie/${playerId}`;

    return (
        <div>
            <iframe
                className="w-full h-screen"
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                src={streamUrl}
                title="Video Player"
            ></iframe>
        </div>
    );
};

export default Player;