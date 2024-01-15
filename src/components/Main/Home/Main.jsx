import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "../Home/MainSection/Home";
import WishList from "../Home/MainSection/WishList";
import Movies from "../Home/MainSection/Movies";
import MovieDetails from "../Home/MainSection/MovieDetails";
import NotFound from "../../NotFound/NotFound";
import PublicMovies from "../../PublicMovies/PublicMovies";
import PublicMoviesDetails from "../../PublicMovies/PublicMoviesDetails";
import NewHome from "./MainSection/newHome";

const Main = () => {
  return (
    <main className="flex-grow dark:bg-black">
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/publicmovies/" element={<PublicMovies />} />
        <Route path="/publicmovies/:id" element={<PublicMoviesDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main;
/* import { Route, Routes, Link } from "react-router-dom";
import Movies from "./TopSection/Movies";
import Favorites from "./Favorites/Favorites";
import GenreFilter from "./Genre/GenreFilter";
import MovieDetails from "./Home/MovieDetails";
import Home from "./Home/Home";

const Main = ({ movies }) => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/movies" element={<Movies movies={movies} />} />
        <Route path="/favorites" element={<Favorites movies={movies} />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/genre/:genre" element={<GenreFilter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main; */
