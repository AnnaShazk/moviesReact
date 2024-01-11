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
import AddToFavourites from "../../Favourites/AddToFavourites";
import Favourites from "../../Favourites/Favourites";
import CardMovie from "../../../CardMovies/CardMovie";

const Home = () => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (movie) => {
    setFavourites([...favourites, movie]);
  };

  const deleteFavourite = (movieToDelete) => {
    setFavourites(favourites.filter((movie) => movie !== movieToDelete));
  };
  const [letsSee, setLetsSee] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const [fetchMovies, setFetchMovies] = useState([]);
  const [fetchMoviesCards, setFetchMoviesCards] = useState([]);
  
  /*   const [MovieDetails, setMovieDetails] = useState([]);
   */ /* 
  setMovieDetails({ title: "Avengers", year: "2021" }) */

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
      {fetchMovies ? (
        fetchMovies.slice(0, 1).map((movie) => (
          <div key={movie.id} className="main_wrapper grid ">
            <div
              style={{
                backgroundImage: `url(${movie.poster})`,
                backgroundRepeat: "repeat-y",
                backgroundSize: "cover",
                width: "100%",
                height: "50vw",
              }}
            >
              <div className="flex flex-col max-w-sm">
                <h1 className="text-4xl bottom-0  font-bold text-white pl-5 pt-9">
                  {movie.title}
                </h1>
                <div className="flex  items-center gap-5 p-5">
                  <FontAwesomeIcon icon={faStar} color="yellow" />
                  <h3 className="text-white font-semibold  mt-1">
                    {movie.rating}
                  </h3>
                  <Button className="rounded-3xl h-7 bg-emerald-600">
                    Completed
                  </Button>
                  <div className="flex gap-2">
                    <h2 className="text-white">{movie.director}</h2>
                    <h2 className="text-white">{movie.year}</h2>
                  </div>
                  <div className="flex flex-row"></div>
                </div>
                <p className="max-w-sm pl-4 pt-1 text-white bg-black bg-opacity-40 rounded">
                  {movie.movie_details}
                </p>
                <div className="flex gap-2 pl-5 pt-4">
                  <Button className="max-w-sm rounded-3xl h-7 bg-emerald-600">
                    Watch Now
                  </Button>
                  <Button className="max-w-sm rounded-2xl h-7 bg-emerald-600">
                    Add to Watchlist
                  </Button>
                </div>
              </div>
              <div className="flex gap-4 pt-5">
                <CardMovie />
              </div>
              <div className="flex justify-end absolute right-0 top-20">
                {isOpen && <PopularMoviesSection />}
                <Button
                  onClick={(e) => setIsOpen(!isOpen)}
                  className="fixed right-0 top-80"
                ></Button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Conecting...</p>
      )}
    </>
  );
};

export default Home;
