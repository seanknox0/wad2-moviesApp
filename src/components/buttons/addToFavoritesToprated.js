import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToFavoriteButtonToprated = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavoriteToprated = e => {
    e.preventDefault();
    context.addToFavoritesToprated(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-success"
      onClick={handleAddToFavoriteToprated}
    >
      Add to Favorites
    </button>
  );
};

export default AddToFavoriteButtonToprated;