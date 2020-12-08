import React, { useContext } from "react";
import { Button } from 'semantic-ui-react';
import {MoviesContext} from "../../contexts/moviesContext";

const AddToWatchListButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchList = e => {
    e.preventDefault();
    context.addToWatchList(movie.id);
  };
  return (
    <Button
      onClick={handleAddToWatchList}
    >
      Add to Watch List

    </Button>
  );
};

export default AddToWatchListButton;