
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}&page_size=6`)
      .then(res => res.json())
      .then(data => setGames(data.results));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Trending Games</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map(game => (
          <Link to={`/game/${game.id}`} key={game.id}>
            <div className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition">
              <img src={game.background_image} alt={game.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{game.name}</h2>
                <p className="text-gray-600">Released: {game.released}</p>
                <p className="text-gray-700">Rating: {game.rating}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
