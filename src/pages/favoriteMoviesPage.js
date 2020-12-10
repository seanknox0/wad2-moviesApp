import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import ReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const FavoriteMoviesPage = props => {
  const context = useContext(MoviesContext);
  let favoritesMovies = context.movies.filter( m => m.favorite )
  const favoritesPopular = context.popular.filter( m => m.favorite )
  const favoritesToprated = context.toprated.filter( m => m.favorite )
  favoritesMovies=favoritesMovies.concat(favoritesPopular)
  favoritesMovies=favoritesMovies.concat(favoritesToprated)
  
  return (
    <MovieListPageTemplate
      movies={favoritesMovies}
      title={"Favorite Movies"}
      action={movie => <ReviewButton movie={movie} />}
    />
  );
};

export default FavoriteMoviesPage;