import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingListPage = () => {
    const [movies, setUpcomingMovies] = useState([]);
    useEffect(() => {
      getUpcomingMovies().then(movies => {
        setUpcomingMovies(movies);
      });
    }, []);

    const addToFavorites = movieId => {
        setUpcomingMovies(movies => {
          const index = movies.map(m => m.id).indexOf(movieId);
          StubAPI.add(movies[index]);
          let newMoviesState = [...movies]
          newMoviesState.splice(index, 1);
          return newMoviesState;
        });
      };
  
    return (
        <PageTemplate
          title='Upcoming Movies'
          movies={movies}
          buttonHandler={addToFavorites}
        />
    );
  };
  
  export default UpcomingListPage;