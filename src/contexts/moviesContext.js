import React, { useEffect, createContext, useReducer, useState } from "react";
import { getMovies } from "../api/movie-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite-movies":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        )
      };
    case "load":
      return { movies: action.payload.movies};
    case "add-review-movies":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        )
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [] });
  const [authenticated, setAuthenticated] = useState(false);

  const addToFavoritesMovies = (movieId) => {
    const indexMovies = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite-movies", payload: { movie: state.movies[indexMovies]} });
  };

  const addReviewMovies = (movie, review) => {
    dispatch({ type: "add-review-movies", payload: { movie, review } });
  };

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        setAuthenticated,
        addToFavoritesMovies: addToFavoritesMovies,
        addReviewMovies: addReviewMovies
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;