import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(import.meta.env.VITE_APP_URL);
      setMovies(response.data);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <p>{movie.director}</p>
          <p>{movie.rating}</p>
          <p>{Year}</p>
          <p>{movie.description}</p>
          <img src={movie.image} alt={movie.title} />
        </div>
      ))}
    </div>
  );
};

export default Movies;