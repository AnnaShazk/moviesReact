import React from "react";
import MovieDetails from "./MovieDetails";
import PopularMoviesSection from "./PopularMoviesSection";
import poster from "../../../../assets/poster.png";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import { Button } from "flowbite-react";
import { Card } from "flowbite-react";
const Home = () => {
  const bagroundImage = poster;

  const [isOpen, setIsOpen] = useState(false);

  const [MovieDetails, setMovieDetails] = useState([]);

  useEffect(() => {}, []);

  /* 
  setMovieDetails({ title: "Avengers", year: "2021" }) */

  return (
    <div className="main_wrapper grid ">
      <div
        style={{
          backgroundImage: `url(${bagroundImage})`,
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
            subscription-hating, login-page-loving panda, who is chosen as the
            Simple Dragon to fight the formidable villain "Documentation".
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
          <Card className="max-w-xs" imgSrc={poster}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Panda is going to fight
            </h5>
          </Card>
          <Card className="max-w-xs" imgSrc={poster}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Panda is fighting
            </h5>
          </Card>
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
  );
};

export default Home;
