import React from "react";
import { Header } from 'semantic-ui-react';

const HeaderMovieList = ({ title, numMovies }) => {
  return (
    <div className="row">
      <div className="col-md-6 offset-4">
        <Header as="h1">
          {`${title}  `}
          <span className="badge badge-pill badge-success">{numMovies}</span>
        </Header>
      </div>
    </div>
  );
};

export default HeaderMovieList;