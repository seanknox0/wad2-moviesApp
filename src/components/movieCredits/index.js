import React, { useEffect, useState } from "react";
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
    <table className="table table-striped table-bordered table-hover">
    <thead>
      <tr>
        <th scope="col">Cast (Actors)</th>
        <th scope="col">Character(s) Played</th>
      </tr>
    </thead>
    <tbody>
      {cast.map(cast => {
          return (
            <tr key={cast.id}>
              <td>{cast.name}</td>
              <td>{cast.character}</td>
            </tr>
          );
        })}
    </tbody>
  </table>
  </div>

  <div class="column">
    <table className="table table-striped table-bordered table-hover">
    <thead>
      <tr>
        <th scope="col">Crew</th>
        <th scope="col">Job on Set</th>
      </tr>
    </thead>
    <tbody>
      {crew.map(crew => {
          return (
            <tr key={crew.id}>
              <td>{crew.name}</td>
              <td>{crew.job}</td>
            </tr>
          );
        })}
    </tbody>
  </table>
  </div>
  </div>
);}