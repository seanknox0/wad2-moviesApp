import React, { useContext } from "react";
import { Button } from 'semantic-ui-react';
import {MoviesContext} from "../../contexts/moviesContext";

const AddToFavoriteButtonPopular = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavoritePopular = e => {
    e.preventDefault();
    context.addToFavoritesPopular(movie.id);
  };
  return (
    <Button
    color="green"
      onClick={handleAddToFavoritePopular}
    >
      Add to Favorites

    </Button>
  );
};

export default AddToFavoriteButtonPopular;