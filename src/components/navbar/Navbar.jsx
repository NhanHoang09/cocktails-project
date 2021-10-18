import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "../../index.css";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="./about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
