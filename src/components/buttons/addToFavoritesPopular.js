import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToFavoriteButtonPopular = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavoritePopular = e => {
    e.preventDefault();
    context.addToFavoritesPopular(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-success"
      onClick={handleAddToFavoritePopular}
    >
      Add to Favorites
    </button>
  );
};

export default AddToFavoriteButtonPopular;