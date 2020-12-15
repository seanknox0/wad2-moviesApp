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
  // Check for duplicates, from website (check readme file)
  const uniqueMovies = Array.from(new Set(favoritesMovies.map(m => m.id)))
  .map(id => {
    return favoritesMovies.find(m => m.id === id)
  })
  
  return (
    <MovieListPageTemplate
      movies={uniqueMovies}
      title={"Favorite Movies"}
      action={movie => <ReviewButton movie={movie} />}
    />
  );
};

export default FavoriteMoviesPage;