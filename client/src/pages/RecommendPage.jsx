
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RecommendPage = () => {
  const [genre, setGenre] = useState('action');
  const [platform, setPlatform] = useState('4');
  const [results, setResults] = useState([]);
  const [userId] = useState('andrea123');

  const handleSearch = async () => {
    const url = `https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}&genres=${genre}&platforms=${platform}&page_size=6`;
    const res = await fetch(url);
    const data = await res.json();
    setResults(data.results);

    await fetch('https://gamematch-backend-sf08.onrender.com/api/preferences', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, genres: [genre], platforms: [platform] })
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Find Games You'll Love</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <select onChange={e => setGenre(e.target.value)} value={genre} className="p-2 border rounded">
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="rpg">RPG</option>
        </select>
        <select onChange={e => setPlatform(e.target.value)} value={platform} className="p-2 border rounded">
          <option value="4">PC</option>
          <option value="187">PS5</option>
          <option value="1">Xbox</option>
        </select>
        <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 rounded">Recommend</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map(game => (
          <Link to={`/game/${game.id}`} key={game.id}>
            <div className="bg-white rounded shadow hover:scale-105 transition">
              <img src={game.background_image} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl">{game.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommendPage;
