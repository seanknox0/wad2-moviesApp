import React, { useContext } from "react";
import { Button } from 'semantic-ui-react';
import {AuthContext} from "../../contexts/authContext";
import {addFavourite} from "../../api/movie-api";

const AddToFavoriteButtonMovies = ({ movie }) => {
  const context = useContext(AuthContext);

  const handleAddToFavoriteMovies = e => {
    e.preventDefault();
    addFavourite(context.userName, movie.id);
  };

  return (
    <Button
    color="green"
      onClick={handleAddToFavoriteMovies}
    >
      Add to Favorites
    
    </Button>
  );
};

export default AddToFavoriteButtonMovies;