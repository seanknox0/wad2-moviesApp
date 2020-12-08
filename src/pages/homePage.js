import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButtonMovies from '../components/buttons/addToFavoritesMovies'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies.filter((m) => { 
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title={"All Movies"}
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesButtonMovies movie={movie} />;
      }}
    />
  );
};

export default MovieListPage;