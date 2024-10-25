// src/pages/Quotes.js
import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Error from '../components/Error';

const Jokes = () => {
  const [jokes, setJokes] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuotes = () => {
    setLoading(true);
    setError(null);
    fetch('https://official-joke-api.appspot.com/jokes/random')
    .then((response) => response.json())
    .then((data) => {
      setJokes(data);
      setLoading(false);
    })
    .catch(() => {
      setError('Failed to fetch jokes');
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchQuotes(); // Initial fetch
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Jokes</h2>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-xl italic">"{jokes.setup}"</p>
          <br />
          <p className="text-xl italic">- {jokes.punchline}</p>
        </div>
        <div className="text-center mt-6">
          <button
              onClick={fetchQuotes}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Show Another Joke
          </button>
        </div>
      </div>
  );
};

export default Jokes;
