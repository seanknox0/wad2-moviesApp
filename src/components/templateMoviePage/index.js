import React from "react";
import { Image } from 'semantic-ui-react'
import MovieHeader from '../headerMovie'
import "./moviePage.css";

const TemplateMoviePage = ({ movie, children }) => {
  return (
    <>
      <MovieHeader movie={movie} />
      <div className="row">
        <div className="col-3">
        <Image
          rounded
          size="medium"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "./film-poster-placeholder.png"
          }
          className="movie"
          alt={movie.title}
        />
        </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};

export default TemplateMoviePage;