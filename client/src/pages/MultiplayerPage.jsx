
import React, { useState } from 'react';

const MultiplayerPage = () => {
  const [genre, setGenre] = useState('action');
  const [games, setGames] = useState([]);

  const fetchMultiplayerGames = async () => {
    const res = await fetch(
      `https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}&tags=multiplayer&genres=${genre}&page_size=6`
    );
    const data = await res.json();
    setGames(data.results);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Discover Multiplayer Games</h1>
      <div className="flex gap-4 mb-4">
        <select onChange={e => setGenre(e.target.value)} value={genre} className="p-2 border rounded">
          <option value="action">Action</option>
          <option value="sports">Sports</option>
          <option value="shooter">Shooter</option>
        </select>
        <button onClick={fetchMultiplayerGames} className="bg-green-600 text-white px-4 py-2 rounded">Find</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map(game => (
          <div key={game.id} className="bg-white rounded shadow p-4">
            <img src={game.background_image} className="w-full h-48 object-cover mb-2" />
            <h2 className="text-xl font-semibold">{game.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiplayerPage;
