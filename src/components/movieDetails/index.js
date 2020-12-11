import React from "react";
import { List, Segment, Header } from 'semantic-ui-react';
import "./movieDetails.css";

export default ({ movie }) => {
  return (
    <>
      <Segment>
      <Header as="h3">Overview</Header>{movie.overview}
      <Header as="h3">Movie Details</Header>
      <List>
       <List.Item><b>Runtime (min.): </b>{movie.runtime}</List.Item>
       <List.Item><b>Release Date: </b>{movie.release_date}</List.Item>
       <List.Item><b>Genres: </b>{movie.genres.map(g => (
          <li key={g.name} className="list-group-item">
            {g.name}
          </li>
        ))}
       </List.Item>
       <List.Item><b>Spoken Languages: </b>{movie.spoken_languages.map(lang => (
          <li key={lang.name} className="list-group-item">
            {lang.name}
          </li>
        ))}
       </List.Item>
       <List.Item><b>Production Companies: </b>{movie.production_companies.map(pc => (
          <li key={pc.name} className="list-group-item">
            {pc.name}
          </li>
        ))}
       </List.Item>
       <List.Item><b>Production Countries: </b>{movie.production_countries.map(pco => (
          <li key={pco.name} className="list-group-item">
            {pco.name}
          </li>
        ))}
       </List.Item>
      </List>
      </Segment>
    </>
  );
};