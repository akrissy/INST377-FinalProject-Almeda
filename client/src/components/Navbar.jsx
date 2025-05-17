
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/gamematch-logo.png';

const Navbar = () => (
  <nav className="bg-gray-900 text-white px-6 py-3 shadow-md">
    <div className="flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} className="w-8 h-8" />
        <span className="text-2xl font-bold">GameMatch</span>
      </Link>
      <div className="flex gap-4">
        <Link to="/recommend" className="hover:text-gray-300">Recommendations</Link>
        <Link to="/multiplayer" className="hover:text-gray-300">Multiplayer</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
