
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      const res = await fetch(`https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_RAWG_API_KEY}`);
      const data = await res.json();
      setGame(data);
    };
    getDetails();
  }, [id]);

  useEffect(() => {
    if (game?.name) {
      fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
          game.name + ' trailer'
        )}&type=video&maxResults=2&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
      )
        .then(res => res.json())
        .then(data => setVideos(data.items));
    }
  }, [game?.name]);

  if (!game) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{game.name}</h1>
      <p className="text-gray-600 mb-4">{game.description_raw}</p>
      <h2 className="text-xl font-semibold mb-2">Trailers:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videos.map(video => (
          <iframe
            key={video.id.videoId}
            width="100%"
            height="250"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            allowFullScreen
          />
        ))}
      </div>
    </div>
  );
};

export default GameDetails;
