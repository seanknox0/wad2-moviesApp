import React, {useContext, useState} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import ReviewButton from '../components/buttons/addReview'
import {AuthContext} from '../contexts/authContext';

const FavoriteMoviesPage = () => {
  const context = useContext(AuthContext);
  const [favourites, setFavourites] = useState([]);

  if (context.isAuthenticated) {
    var userFavourites = async() => { 
      let favouriteMovies = await context.userFavourites(context.userName);
      return favouriteMovies;
    }
    userFavourites().then(userFav => setFavourites(userFav));
  
  return (
    <MovieListPageTemplate
      movies={favourites}
      title={"Favorite Movies"}
      action={movie => <ReviewButton movie={movie} />}
    />
  );
}
};

export default FavoriteMoviesPage;