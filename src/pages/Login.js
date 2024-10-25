// src/pages/Login.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ handleLogin, isAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      handleLogin();
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
      <div className="p-4">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border p-2"
          />
          <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2"
          />
          <button type="submit" className="bg-blue-500 text-white p-2">Login</button>
        </form>
      </div>
  );
};

export default Login;
