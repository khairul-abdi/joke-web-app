// src/components/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ isAuthenticated, handleLogout }) => (
    <nav className="bg-gray-200 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-blue-500">Home</Link></li>
        <li><Link to="/jokes" className="text-blue-500">Jokes</Link></li>
        {!isAuthenticated ? (
            <li><Link to="/login" className="text-blue-500">Login</Link></li>
        ) : (
            <li>
              <button onClick={handleLogout} className="text-blue-500">Logout</button>
            </li>
        )}
      </ul>
    </nav>
);

export default Nav;
