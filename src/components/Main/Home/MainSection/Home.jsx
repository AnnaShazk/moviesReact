import React from "react";
import MovieDetails from "./MovieDetails";
import PopularMoviesSection from "./PopularMoviesSection";
import poster from "../../../../assets/poster.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import { Button } from "flowbite-react";

const Home = () => {
  const bagroundImage = poster;

  const [MovieDetails, setMovieDetails] = useState([]);
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
        <div className="flex flex-col max-w-sm ">
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
              <h2 className="text-white">Action</h2>
              <h2 className="text-white">2023</h2>
            </div>
            <div className="flex flex-row"></div>
          </div>
          <p className="max-w-sm pl-5 pt-1 text-white">
            Kung Fu Panda is an animated film about Po, a clumsy panda, who is
            chosen as the Dragon Warrior to fight the formidable villain Tai
            Lung.
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
      </div>
    </div>
  );
};

export default Home;
