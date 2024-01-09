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

const Home = () => {
  const bagroundImage = posterPotato;

  const [letsSee, setLetsSee] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [fetchMovies, setFetchMovies] = useState([]);

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
        <div className="main_wrapper grid ">
          <div
            style={{
              backgroundImage: `url(${"https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"})`,
              backgroundRepeat: "repeat-y",
              backgroundSize: "cover",
              width: "100%",
              height: "50vw",
            }}
          >
            <div className="flex flex-col max-w-sm">
              <h1 className="text-4xl bottom-0  font-bold text-white pl-5 pt-9">
                Kung Fu Panda
              </h1>

              <div className="flex  items-center gap-5 p-5">
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <h3 className="text-white font-semibold  mt-1">8.2</h3>
                <Button className="rounded-3xl h-7 bg-emerald-600">
                  Completed
                </Button>
                <div className="flex gap-2">
                  <h2 className="text-white">Simple</h2>
                  <h2 className="text-white">2024</h2>
                </div>
                <div className="flex flex-row"></div>
              </div>
              <p className="max-w-sm pl-4 pt-1 text-white bg-black bg-opacity-40 rounded">
                Kung Fu Panda is an animated film about Mahmoud, a
                subscription-hating, login-page-loving panda, who is chosen as
                the Simple Dragon to fight the formidable villain
                "Documentation".
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
              {fetchMovies.map((movie) => (
                <div>
                  <Card
                    key={movie._id}
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
                    <Button>Add to favorites</Button>
                  </Card>
                </div>
              ))}
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
      ) : (
        <p>Conecting...</p>
      )}
    </>
  );
};

export default Home;
