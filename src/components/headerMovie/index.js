import React from "react";
import { Header } from 'semantic-ui-react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const MovieHeader = ({ movie }) => {
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <Header as="h1">
          {movie.title}
          {"  "}
          <a href={movie.homepage}>
            <FontAwesomeIcon icon={["fas", "home"]} size="1x" />
          </a>
        </Header>
      </div>
    </div>
  );
};

export default MovieHeader;