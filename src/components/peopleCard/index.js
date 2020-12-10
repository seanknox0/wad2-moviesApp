import React from "react";
import { Card, Image } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PeopleCard = ({person}) => {
  return (
    <div className="col-sm-3">
      <div className="card bg-white">
      <Card>
      <Link to={`/person/${person.id}`}>
        <Image
          className="card-img-tag center"
          alt={person.name}
          src={
            person.poster_path
              ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
              : "./person-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <Card.Content>
          <Card.Header className="card-title ">{person.name}</Card.Header>
          <Card.Description>
            <FontAwesomeIcon icon={["fas", "fire"]} />
            <span> {person.popularity}</span>
          </Card.Description>
          </Card.Content>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PeopleCard;