import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddWatchLaterButton from "../components/buttons/addWatchLater";

const UpcomingMovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => { 
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