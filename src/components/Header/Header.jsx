import React, { useState } from "react";
import { Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import SearchBar from "./SearchBar";
import "./Header.css";
import AddMovieForm from "../AddMovie/AddMovieForm";
import Favourites from "../Main/Favourites/Favourites";

const Header = ({ toggleCiaranMode, darkMode, fetchMoviesData }) => {
  const [favourites, setFavourites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToFavourites = (movie) => {
    setFavourites([...favourites, movie]);
  };

  const deleteFavourite = (movieToDelete) => {
    setFavourites(favourites.filter((movie) => movie !== movieToDelete));
  };

  return (
    <Navbar fluid className="dark:bg-black dark:text-white ">
      <Link to="/">
        <div className="flex">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Movies" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Movies
          </span>
        </div>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <div className="flex items-center  gap-6">
          <SearchBar fetchMoviesData={fetchMoviesData} />
          <NavLink to="#">Movies</NavLink>
          <NavLink to="#">WishList</NavLink>
          <Link to="favorites" onClick={() => setIsModalOpen(true)}>
            Favourites
          </Link>
          <NavLink to="#">About</NavLink>
          <AddMovieForm />
          <label className="switch">
            <input
              onChange={toggleCiaranMode}
              checked={darkMode}
              type="checkbox"
            />
            <span className="slider"></span>
          </label>
        </div>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setIsModalOpen(false)}>
                &times;
              </span>
              <Favourites
                favourites={favourites}
                deleteFavourite={deleteFavourite}
              />
            </div>
          </div>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
