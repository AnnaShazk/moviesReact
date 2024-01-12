import React, { useState, useEffect } from "react";
import axios from "axios";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(`${import.meta.env.VITE_APP_URL}/api/movies`);
      setMovies(response.data);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.director}</p>
          <p>{movie.rating}</p>
          <p>{movie.year}</p>
          <p>{movie.movie_details}</p>
          <img src={movie.poster} alt={movie.title} />
        </div>
      ))}
    </div>
    
  );
};

export default Movies;
