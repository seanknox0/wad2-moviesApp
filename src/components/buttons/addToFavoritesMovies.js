import React, { useContext } from "react";
import { Button } from 'semantic-ui-react';
import {MoviesContext} from "../../contexts/moviesContext";

const AddToFavoriteButtonMovies = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavoriteMovies = e => {
    e.preventDefault();
    context.addToFavoritesMovies(movie.id);
  };
  return (
    <Button
      onClick={handleAddToFavoriteMovies}
    >
      Add to Favorites
    
    </Button>
  );
};

export default AddToFavoriteButtonMovies;