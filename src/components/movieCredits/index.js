import React, { useEffect, useState } from "react";
import { getCredits } from "../../api/tmdb-api";

export default ({ movie }) => {
    const [credits, setCredits] = useState([]);
    
    useEffect(() => {
    getCredits(movie.id).then(credits => {
      setCredits(credits);
    });
  }, []);
  
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
      {credits.map(c => {
          return (
            <tr key={c.id}>
              <td>{c.cast.name}</td>
              <td>{c.cast.character}</td>
            </tr>
          );
        })}
    </tbody>
  </table>
  <div class="column">
  <table className="table table-striped table-bordered table-hover">
  <thead>
    <tr>
      <th scope="col">Crew</th>
      <th scope="col">Job</th>
    </tr>
  </thead>
  <tbody>
    {credits.map(c => {
        return (
          <tr key={c.id}>
            <td>{c.crew.name}</td>
            <td>{c.crew.job}</td>
          </tr>
        );
    })}
  </tbody>
</table>
</div>
</div>
</div>
)};