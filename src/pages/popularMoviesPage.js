import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoriteButtonPopular from "../components/buttons/addToFavoritesPopular";

const PopularMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.popular.filter((m) => { 
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title={"Popular Movies"}
      movies={movies}
      action={(movie) => {
        return <AddToFavoriteButtonPopular movie={movie} />;
      }}
    />
  );
};

export default PopularMoviesPage;