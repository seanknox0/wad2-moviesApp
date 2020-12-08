import React, { useContext } from "react";
import { Button } from 'semantic-ui-react';
import {MoviesContext} from "../../contexts/moviesContext";

const AddToFavoriteButtonToprated = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavoriteToprated = e => {
    e.preventDefault();
    context.addToFavoritesToprated(movie.id);
  };
  return (
    <Button
      onClick={handleAddToFavoriteToprated}
    >
      Add to Favorites

    </Button>
  );
};

export default AddToFavoriteButtonToprated;