import React, { useState } from "react";
import { Button, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import SearchBar from "./SearchBar";
import "./Header.css";
import AddMovieForm from "../AddMovie/AddMovieForm";
import Favourites from "../Favourites/Favourites";
import PublicMovies from "../PublicMovies/PublicMovies";

const Header = ({ toggleCiaranMode, darkMode, fetchMoviesData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Navbar fluid className="dark:bg-black dark:text-white ">
      <Link to="/">
        <div className="flex s">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Movies" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Movies
          </span>
        </div>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <div className="flex flex-wrap items-center  gap-6">
          <SearchBar fetchMoviesData={fetchMoviesData} />
          <AddMovieForm />

          <Link to="/publicmovies">Public Movies</Link>
          <Favourites />
          <label className="switch">
            <input
              onChange={toggleCiaranMode}
              checked={darkMode}
              type="checkbox"
            />
            <span className="slider"></span>
          </label>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
