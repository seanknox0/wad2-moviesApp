import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoriteButtonToprated from "../components/buttons/addToFavoritesToprated";

const RatedMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.toprated.filter((m) => { 
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title={"Top Rated Movies"}
      movies={movies}
      action={(movie) => {
        return <AddToFavoriteButtonToprated movie={movie} />;
      }}
    />
  );
};

export default RatedMoviesPage;