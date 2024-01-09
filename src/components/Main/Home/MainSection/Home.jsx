import React from "react";
import MovieDetails from "./MovieDetails";
import PopularMoviesSection from "./PopularMoviesSection";
import poster from "../../../../assets/poster.png"
import { useState } from "react";

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
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "50vw",
        }}
      >
        <div className="flex flex-col items-start justify-start pt-5 h-full">
          <h1 className="text-5xl font-bold text-white">Avengers</h1>
          <h3 className="text-2xl font-semibold text-white">2021</h3>
        </div>
      </div>

    </div>
  );
};

export default Home;
