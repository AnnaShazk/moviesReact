import React from "react";
import { useState } from "react";
import { Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import SearchBar from "./SearchBar";
import "./Header.css";
import AddMovieForm from "../AddMovie/AddMovieForm";
import Favourites from "../Main/Favourites/Favourites";



const Header = ({ toggleCiaranMode, darkMode }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (movie) => {
    setFavourites([...favourites, movie]);
  };

  const deleteFavourite = (movieToDelete) => {
    setFavourites(favourites.filter(movie => movie !== movieToDelete));
  };
  return (
    <Navbar fluid className="dark:bg-black dark:text-white">
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Movies" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Movies
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <div className="flex items-center  gap-6">
          <SearchBar />
          <NavLink to="#" active="#">
            {" "}
            {/* make a changes here , it was "active" */}
            Home
          </NavLink>
          <NavLink to="#">Movies</NavLink>
          <NavLink to="#">WishList</NavLink>
          <Favourites favourites={favourites} deleteFavourite={deleteFavourite} />
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
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
