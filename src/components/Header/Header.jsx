import React, { useState } from "react";
import { Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import SearchBar from "./SearchBar";
import "./Header.css";
import AddMovieForm from "../AddMovie/AddMovieForm";
import Favourites from "../Favourites/Favourites";

const Header = ({ toggleCiaranMode, darkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <SearchBar />
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="#">WishList</NavLink>
          <NavLink to="#">About</NavLink>
          <AddMovieForm />
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
