import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "flowbite-react";
import AddToFavourites from "../Favourites/AddToFavourites";
import { Link } from "react-router-dom";
import DeleteMovie from "../DeleteMovie/DeleteMovie";

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
    <div className="flex overflow-x-auto py-5 gap-4">
      {movieDetails.map((movie) => (
        <Link to={`/movies/${movie.id}`}>
          <div
            className="flex-none w-60 shrink-0 bg-white rounded-lg shadow-md"
            key={movie.id}
          >
            <img
              src={movie?.poster}
              alt={movie.title}
              className="rounded-t-lg"
            />
            <div className="p-4">
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {movie.title}
              </h5>
              <div className="flex justify-between items-center mt-4">
                <AddToFavourites movie={movie} />
                <DeleteMovie id={movie.id} setMovieDetails={setMovieDetails} />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardMovie;
