import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_URL}/api/movies`
      );
      setMovies(response.data);
    };

    fetchMovies();
  }, []);

  console.log(movies);
  return (
    <div>
      {movies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="rounded overflow-hidden shadow-lg p-4 bg-white dark:bg-gray-800"
            >
              <Link to={`/movies/${movie.id}`}>
                <img
                  className="w-full h-64 object-cover"
                  src={movie.poster}
                  alt={movie.title}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{movie.title}</div>
                  <p className="text-gray-700 dark:text-white text-base">
                    {movie.director}
                  </p>
                  <p className="text-gray-700 dark:text-white text-base">
                    {movie.rating}
                  </p>
                  <p className="text-gray-700 dark:text-white text-base">
                    {movie.year}
                  </p>
                  <p className="text-gray-700 dark:text-white text-base">
                    {movie.movie_details}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
