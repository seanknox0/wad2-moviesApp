import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {UpcomingMoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'
import AddWatchLaterButton from "../components/buttons/addWatchLater";

const UpcomingMovieListPage = () => {
  const context = useContext(UpcomingMoviesContext);
  const movies = context.movies.filter((m) => { 
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="No. Movies"
      movies={movies}
      action={(movie) => {
        return <AddWatchLaterButton movie={movie} />;
      }}
    />
  );
};

export default UpcomingMovieListPage;