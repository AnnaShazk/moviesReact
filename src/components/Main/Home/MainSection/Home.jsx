import React from "react";
import MovieDetails from "./MovieDetails";
import PopularMoviesSection from "./PopularMoviesSection";
import poster from "../../../../assets/poster.png"

const Home = () => {

  const bagroundImage = poster;

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
      ></div>
    </div>
  );
};

export default Home;
