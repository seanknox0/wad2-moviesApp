import React, { useEffect, createContext, useReducer, useState } from "react";
import { getMovies, getUpcomingMovies } from "../api/movie-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-watchlist":
      return {
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
        ),
        movies: [...state.movies]
      };
    case "add-favorite-movies":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming]
      };
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming] };
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies] };
    case "add-review-movies":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming]
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [] });
  const [authenticated, setAuthenticated] = useState(false);

  const addToFavoritesMovies = (movieId) => {
    const indexMovies = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite-movies", payload: { movie: state.movies[indexMovies]} });
  };

  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist", payload: { movie: state.upcoming[index] } });
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

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        setAuthenticated,
        addToWatchList: addToWatchList,
        addToFavoritesMovies: addToFavoritesMovies,
        addReviewMovies: addReviewMovies
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;