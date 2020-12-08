import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const FavoriteMoviesPage = props => {
  const context = useContext(MoviesContext);
  const favoritesMovies = context.movies.filter( m => m.favorite )
  const favoritesPopular = context.popular.filter( m => m.favorite )
  const favoritesToprated = context.toprated.filter( m => m.favorite )
  
  return (
    <MovieListPageTemplate
      movies={favoritesMovies}
      title={"Favorite Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default FavoriteMoviesPage;