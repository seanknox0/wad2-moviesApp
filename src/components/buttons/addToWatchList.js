import React, { useContext } from "react";
import { Button } from 'semantic-ui-react';
import {AuthContext} from "../../contexts/authContext";
import {addWatchlater} from "../../api/movie-api";

const AddToWatchlistButton = ({ movie }) => {
  const context = useContext(AuthContext);

  const handleAddToWatchlist = e => {
    e.preventDefault();
    addWatchlater(context.userName, movie.id);
  };

  return (
    <Button
    color="green"
      onClick={handleAddToWatchlist}
    >
      Add to Watchlist
    
    </Button>
  );
};

export default AddToWatchlistButton;