import React, {useContext, useState} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {AuthContext} from '../contexts/authContext'

const WatchListPage = () => {
  const context = useContext(AuthContext);
  const [watchlater, setWatchlater] = useState([]);

  if (context.isAuthenticated) {
    var userWatchlater = async() => { 
      let watchlaterMovies = await context.userWatchlater(context.userName);
      return watchlaterMovies;
    }
    userWatchlater().then(userWatch => setWatchlater(userWatch));
  return (
    <MovieListPageTemplate
      movies={watchlater}
      title={"Watch List"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
  }
};

export default WatchListPage;