import React, { useEffect, useState } from "react";
import AddToFavourites from "../Main/Favourites/AddToFavourites";
import axios from "axios";
import { Card } from "flowbite-react";
const CardMovie = () => {
  const [favourites, setFavourites] = useState([]);

  const [MovieDetails, setMovieDetails] = useState([]);
  const addToFavourites = (movie) => {
    setFavourites([...favourites, movie]);
  };

  const deleteFavourite = (movieToDelete) => {
    setFavourites(favourites.filter((movie) => movie !== movieToDelete));
  };
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}/api/movies`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="flex gap-4 pt-5">
        {MovieDetails.map((movie) => (
          <Card
            key={movie.id}
            className="max-w-xs w-64 "
            imgSrc={movie?.poster}
          >
            <div className="flex gap-6">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {movie.title}
              </h5>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {movie.year}
              </h5>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardMovie;
