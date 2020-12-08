import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import "./movieCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieCard = ({movie, action}) => {

  return (
    <div className="col-sm-3">
      <div className="card bg-white">
      <Card>
      <Link to={`/movies/${movie.id}`}>
        <Image
          className="card-img-tag center "
          alt={movie.title}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <Card.Content>
          <Card.Header className="card-title ">{movie.title}</Card.Header>
          <Card.Meta>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {movie.release_date}</span>
          </Card.Meta>
          <Card.Description>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {movie.vote_average}</span>
          </Card.Description>
          </Card.Content>
          </div>
          <Card.Content extra>
          <div className="card-footer">
           {action(movie)}
          </div>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default MovieCard;