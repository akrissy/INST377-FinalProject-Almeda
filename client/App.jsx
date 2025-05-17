
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './src/pages/Homepage';
import RecommendPage from './src/pages/RecommendPage';
import MultiplayerPage from './src/pages/MultiplayerPage';
import GameDetails from './src/pages/GameDetails';
import Navbar from './src/components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recommend" element={<RecommendPage />} />
        <Route path="/multiplayer" element={<MultiplayerPage />} />
        <Route path="/game/:id" element={<GameDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
