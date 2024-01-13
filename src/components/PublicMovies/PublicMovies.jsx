import React, { useEffect, useState } from "react";
import axios from "axios";

const PublicMovies = () => {
  const [apiMovies, setApiMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?ad1b3e747cf8ca49a4467491cb39f4e7&language=en-US&page=1"
        );
        setApiMovies(response.data.results.slice(0, 10));
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      {apiMovies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </div>
  );
};

export default PublicMovies;
