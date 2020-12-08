import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import { getCreditsCast } from "../../api/tmdb-api";
import { getCreditsCrew } from "../../api/tmdb-api";
import "./movieCredits.css";

export default ({ movie }) => {
    const [cast, setCreditsCast] = useState([]);
    const [crew, setCreditsCrew] = useState([]);
    
    useEffect(() => {
      getCreditsCast(movie.id).then(cast => {
      setCreditsCast(cast);
    });},[]);
    
    useEffect(() => {
      getCreditsCrew(movie.id).then(crew => {
      setCreditsCrew(crew);
    });},[]);
  
  return (
 <div class="row"> 
  <div class="column">
    <Table celled inverted selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell scope="col">Cast (Actors)</Table.HeaderCell>
        <Table.HeaderCell scope="col">Character(s) Played</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {cast.map(cast => {
          return (
            <Table.Row key={cast.id}>
              <Table.Cell>{cast.name}</Table.Cell>
              <Table.Cell>{cast.character}</Table.Cell>
            </Table.Row>
          );
        })}
    </Table.Body>
    </Table>
  </div>

  <div class="column">
    <Table celled inverted selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell scope="col">Crew</Table.HeaderCell>
        <Table.HeaderCell scope="col">Job on Set</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {crew.map(crew => {
          return (
            <Table.Row key={crew.id}>
              <Table.Cell>{crew.name}</Table.Cell>
              <Table.Cell>{crew.job}</Table.Cell>
            </Table.Row>
          );
        })}
    </Table.Body>
    </Table>
  </div>
  </div>
);}