import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "flowbite-react";
import AddToFavourites from "../Favourites/AddToFavourites";
import { Link } from "react-router-dom";
import DeleteMovie from "../DeleteMovie/DeleteMovie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faShare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

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
    <div className="flex overflow-x-auto py-5 gap-4 card-wrapper ">
      {movieDetails.map((movie) => (
        <div
          className="card flex-none w-60 shrink-0 bg-white rounded-lg shadow-md dark:bg-gray-700"
          key={movie.id}
        >
          <Link to={`/movies/${movie.id}`}>
            <img
              src={movie?.poster}
              alt={movie.title}
              className="rounded-t-lg"
            />
          </Link>
          <div className="p-4">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 text-center  dark:text-white">
              {movie.title}
            </h5>
          </div>
          <div className="card-toolbar flex flex-col gap-10 absolute top-0 right-0 w-0 h-full bg-white bg-opacity-75 items-center justify-center transition-width duration-200">
            <AddToFavourites movie={movie} />

            <FontAwesomeIcon
              className=" cursor-pointer"
              icon={faComment}
              color="white"
            />

            <DeleteMovie id={movie.id} setMovieDetails={setMovieDetails} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardMovie;
