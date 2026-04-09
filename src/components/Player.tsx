import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Player = () => {
    const { playerId } = useParams();
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get('type') || 'movie';

    // 🎯 STATES
    const [server, setServer] = useState(0);
    const [season, setSeason] = useState(1);
    const [episode, setEpisode] = useState(1);
    const [loading, setLoading] = useState(true);

    // 🎬 FINAL CLEAN SERVERS
    const servers = [
        {
            name: "VidSrc",
            getUrl: () =>
                type === 'tv'
                    ? `https://vidsrc-embed.ru/embed/tv/${playerId}/${season}/${episode}`
                    : `https://vidsrc-embed.ru/embed/movie/${playerId}`
        },
        {
            name: "SuperEmbed",
            getUrl: () =>
                type === 'tv'
                    ? `https://multiembed.mov/?video_id=${playerId}&tmdb=1&s=${season}&e=${episode}`
                    : `https://multiembed.mov/?video_id=${playerId}&tmdb=1`
        },
        {
            name: "CloudPlay",
            getUrl: () =>
                type === 'tv'
                    ? `https://cloudplay.to/embed/tv/${playerId}/${season}/${episode}`
                    : `https://cloudplay.to/embed/movie/${playerId}`
        }
    ];

    const currentUrl = servers[server].getUrl();

    // 🔁 AUTO SWITCH (LIMITED)
    const handleError = () => {
        if (server < servers.length - 1) {
            setServer(server + 1);
            setLoading(true);
        }
    };

    // 🎯 SEO
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

            {/* ✅ SEO CONTENT */}
            <h1 className="text-xl font-semibold p-3">
                {type === 'tv'
                    ? "Watch TV Show Online in HD"
                    : "Watch Movie Online in HD"}
            </h1>

            <p className="px-3 text-sm text-gray-400">
                {type === 'tv'
                    ? "Stream latest TV shows and web series online in HD quality."
                    : "Watch latest Bollywood and Hollywood movies online in HD quality."}
            </p>

            {/* 🎬 SERVER SWITCH */}
            <div className="px-3 py-2 flex gap-2 flex-wrap">
                {servers.map((s, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setServer(index);
                            setLoading(true);
                        }}
                        className={`px-3 py-1 rounded ${
                            server === index
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-700 text-white'
                        }`}
                    >
                        {s.name}
                    </button>
                ))}
            </div>

            {/* 📺 SEASON + EPISODE */}
            {type === 'tv' && (
                <div className="px-3 py-2 flex gap-3">
                    <select
                        value={season}
                        onChange={(e) => {
                            setSeason(Number(e.target.value));
                            setLoading(true);
                        }}
                        className="bg-gray-800 text-white p-2 rounded"
                    >
                        {[...Array(10)].map((_, i) => (
                            <option key={i} value={i + 1}>
                                Season {i + 1}
                            </option>
                        ))}
                    </select>

                    <select
                        value={episode}
                        onChange={(e) => {
                            setEpisode(Number(e.target.value));
                            setLoading(true);
                        }}
                        className="bg-gray-800 text-white p-2 rounded"
                    >
                        {[...Array(20)].map((_, i) => (
                            <option key={i} value={i + 1}>
                                Episode {i + 1}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* ⚠️ MESSAGE */}
            <p className="px-3 text-sm text-yellow-400">
                If one server doesn’t work, try another.
            </p>

            {/* ⏳ LOADING */}
            {loading && (
                <div className="text-center py-5 text-white">
                    Loading player...
                </div>
            )}

            {/* 🎬 PLAYER */}
            <iframe
                key={currentUrl}
                className="w-full h-screen"
                src={currentUrl}
                allowFullScreen
                loading="lazy"
                onLoad={() => setLoading(false)}
                onError={handleError}
                style={{ border: "none" }}
            ></iframe>

            {/* Hidden SEO */}
            <div style={{ display: "none" }}>
                {type === 'tv'
                    ? "watch tv shows online free, latest web series hd, trending tv shows"
                    : "watch movies online free hd, latest bollywood hollywood movies"}
            </div>

        </div>
    );
};

export default Player;