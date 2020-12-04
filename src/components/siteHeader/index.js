import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";

const SiteHeader = () => {
  return (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          Home
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "play"]}
        size="3x"
      />
      <span className="navbar-text text-light">
        Movies Fan App!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "tv"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              All Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/popular">
              Popular
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/toprated">
              Top Rated
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/upcoming">
              Upcoming
            </Link>
            </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/watchlist">
              Watch-List
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default SiteHeader;