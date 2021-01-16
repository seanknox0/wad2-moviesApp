import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";

const SiteHeader = () => {
  return (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className="nav-link text-white" to="/">
          Movies Central DB
        </Link>
      </nav>
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies">
              All Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/upcoming">
              Upcoming
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/person">
              People
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/watchlist">
              Watch-List
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/signup">
              Signup
            </Link>
          </li>
        </ul>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "play"]}
        size="3x"
      />
      <span className="navbar-text text-light">
        View Movies and People in the Movie Industry!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "tv"]}
        size="3x"
      />
    </nav>
  );
};

export default SiteHeader;