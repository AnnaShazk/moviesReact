import React from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Movies" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Movies
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link to="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link to="#">Movies</Navbar.Link>
        <Navbar.Link to="#">WishList</Navbar.Link>
        <Navbar.Link to="#">Favourites</Navbar.Link>
        <Navbar.Link as={Link} to="#">
          About
        </Navbar.Link>
        <li>
          <label className="switch">
            <input className="cb" type="checkbox" />
            <span className="toggle">
              <span className="left">off</span>
              <span className="right">on</span>
            </span>
          </label>
        </li>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
