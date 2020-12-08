import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToFavoriteButtonMovies = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavoriteMovies = e => {
    e.preventDefault();
    context.addToFavoritesMovies(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-success"
      onClick={handleAddToFavoriteMovies}
    >
      Add to Favorites
    </button>
  );
};

export default AddToFavoriteButtonMovies;