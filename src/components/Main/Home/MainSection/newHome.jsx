import React from "react";
import MovieDetails from "./MovieDetails";
import PopularMoviesSection from "./PopularMoviesSection";
import posterPotato from "../../../../assets/poster.png";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import { Button } from "flowbite-react";
import { Card } from "flowbite-react";
import AddMovieForm from "../../../AddMovie/AddMovieForm";
import axios from "axios";
import Pagination from "../../../Pagination/Pagination";
import CardMovie from "../../../CardMovies/CardMovie";
import Movies from "./Movies";

const newHome = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [letsSee, setLetsSee] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const [fetchMovies, setFetchMovies] = useState([]);
  const [fetchMoviesCards, setFetchMoviesCards] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}/api/movies`
        );
        setFetchMovies(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovies();
  }, []);
  return (
    <>
      {fetchMovies.slice(activeIndex, activeIndex + 1).map((movie) => (
        <div
          className="flex flex-col items-start justify-center p-4 md:p-8 min-h-screen"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${movie.poster})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="max-w-90 xxs:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
            <h2 className="text-white text-xl  sm:text-2xl  md:text-4xl lg:text-7xl">
              {movie.title}
            </h2>

            <div className="flex flex-wrap items-center gap-2">
              <FontAwesomeIcon icon={faStar} color="yellow" size="2x" />
              <h3 className="text-white xxs:text-sm lg:text-2xl mt-2 ">
                {movie.rating}/10
              </h3>
              <span className="text-4xl text-gray-500">•</span>
              <Button className="rounded-2xl h-7 bg-white bg-opacity-20 backdrop-filter backdrop-blur-md text-white border border-white border-opacity-20 mt-2">
                Completed
              </Button>
              <span className="text-4xl text-gray-500">•</span>
              <h3 className="text-white text-2xl mt-2 ">{movie.year}</h3>
              <span className="text-4xl text-gray-500">•</span>
              <h3 className="text-white text-2xl mt-2 ">{movie.director}</h3>
            </div>
            <p className="text-white text-md max-w-md md:text-lg lg:text-2xl">
              {movie.movie_details}
            </p>
            <div className="flex flex-wrap gap-2">
              <Button className="rounded-2xl h-7 bg-white bg-opacity-20 backdrop-filter backdrop-blur-md text-white border border-white border-opacity-20 mt-2">
                Watch Now
              </Button>
            </div>
            <div className="flex items">
              <Pagination
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </div>
            <CardMovie />
          </div>
        </div>
      ))}
    </>
  );
};

export default newHome;
