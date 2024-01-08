import React from "react";
import { Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import SearchBar from "./SearchBar";
import "./Header.css";

const Header = ({ toggleCiaranMode, darkMode }) => {
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
          <NavLink to="#" active>
            Home
          </NavLink>
          <NavLink to="#">Movies</NavLink>
          <NavLink to="#">WishList</NavLink>
          <NavLink to="#">Favourites</NavLink>
          <NavLink to="#">About</NavLink>

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
