import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "flowbite-react";

const CardMovie = () => {
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}/api/movies`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="flex gap-4 pt-5">
      {movieDetails.map((movie) => (
        <Card key={movie.id} className="max-w-xs w-64" imgSrc={movie?.poster}>
          <div className="flex gap-6">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.title}
            </h5>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CardMovie;
