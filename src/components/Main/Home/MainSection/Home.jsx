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

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
        fetchMovies.slice(activeIndex, activeIndex + 1).map((movie) => (
          <div key={movie.id} className="main_wrapper  ">
            <div
              className="flex flex-col items-start justify-end"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${movie.poster})`,
                backgroundRepeat: "repeat-y",
                backgroundSize: "cover",
                width: "100%",
                height: "50vw",
              }}
            >
              <div className="flex ">
                <div className="flex flex-col gap-4  max-w-s p-4 ">
                  <h1 className="text-4xl bottom-0  font-bold text-white ">
                    {movie.title}
                  </h1>
                  <div className="flex  items-center gap-5 ">
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
                  <p className="max-w-sm  pt-1 text-white rounded">
                    {movie.movie_details}
                  </p>
                  <div className="flex gap-2 ">
                    <Button className="max-w-sm rounded-3xl h-7 bg-emerald-600">
                      Watch Now
                    </Button>
                    <Button className="max-w-sm rounded-2xl h-7 bg-emerald-600">
                      Add to Watchlist
                    </Button>
                  </div>
                  <div className="flex gap-2 ">
                    <Button className="max-w-sm rounded-3xl h-7 bg-emerald-600">
                      Update the Movie
                    </Button>
                    <Button className="max-w-sm rounded-2xl h-7 bg-emerald-600">
                      Delete the Movie
                    </Button>
                  </div>
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
            <div className="flex items">
              <Pagination
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            </div>
            <Movies />
          </div>
        ))
      ) : (
        <p>Conecting...</p>
      )}
    </>
  );
};

export default Home;
