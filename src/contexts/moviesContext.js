import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getPopularMovies, getRatedMovies } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-watchlist":
      return {
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
        ),
        movies: [...state.movies],
        popular: [...state.popular],
        toprated: [...state.toprated],
      };
    case "add-favorite-movies":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        popular: [...state.popular],
        toprated: [...state.toprated],
        upcoming: [...state.upcoming],
      };
    case "add-favorite-popular":
      return {
        popular: state.popular.map((p) =>
          p.id === action.payload.movie.id ? { ...p, favorite: true } : p
        ),
        movies: [...state.movies],
        toprated: [...state.toprated],
        upcoming: [...state.upcoming],
      };
    case "add-favorite-toprated":
      return {
        toprated: state.toprated.map((t) =>
          t.id === action.payload.movie.id ? { ...t, favorite: true } : t
        ),
        movies: [...state.movies],
        popular: [...state.popular],
        upcoming: [...state.upcoming],
      };
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], popular: [...state.popular], toprated: [...state.toprated] };

    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies], popular: [...state.popular], toprated: [...state.toprated] };

    case "load-popular":
      return { popular: action.payload.movies, upcoming: [...state.upcoming], movies: [...state.movies], toprated: [...state.toprated] };
    
    case "load-toprated":
      return { toprated: action.payload.movies, upcoming: [...state.upcoming], movies: [...state.movies], popular: [...state.popular] };

    case "add-review-movies":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        popular: [...state.popular],
        toprated: [...state.toprated],
        upcoming: [...state.upcoming],
      };
    case "add-review-popular":
      return {
        popular: state.popular.map((p) =>
          p.id === action.payload.movie.id
            ? { ...p, review: action.payload.review }
            : p
        ),
        toprated: [...state.toprated],
        upcoming: [...state.upcoming],
        movies: [...state.movies]
      };
    case "add-review-toprated":
      return {
        toprated: state.toprated.map((t) =>
          t.id === action.payload.movie.id
            ? { ...t, review: action.payload.review }
            : t
        ),
        popular: [...state.popular],
        upcoming: [...state.upcoming],
        movies: [...state.movies]
      };
    default:
      return state;
  }
};

// add favoutite handlers for popular/top rated
// problem might be with payload "movie"
const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], popular: [], toprated: [] });

  const addToFavoritesMovies = (movieId) => {
    const indexMovies = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite-movies", payload: { movie: state.movies[indexMovies]} });
  };

  const addToFavoritesPopular = (movieId) => {
    const indexPopular = state.popular.map((p) => p.id).indexOf(movieId);
    dispatch({ type: "add-favorite-popular", payload: { movie: state.popular[indexPopular]} });
  };

  const addToFavoritesToprated = (movieId) => {
    const indexToprated = state.toprated.map((t) => t.id).indexOf(movieId);
    dispatch({ type: "add-favorite-toprated", payload: { movie: state.toprated[indexToprated]} });
  };

  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist", payload: { movie: state.upcoming[index] } });
  };

  const addReviewMovies = (movie, review) => {
    dispatch({ type: "add-review-movies", payload: { movie, review } });
  };

  const addReviewPopular = (movie, review) => {
    dispatch({ type: "add-review-popular", payload: { movie, review } });
  };

  const addReviewToprated = (movie, review) => {
    dispatch({ type: "add-review-toprated", payload: { movie, review } });
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

  useEffect(() => {
    getPopularMovies().then((movies) => {
      dispatch({ type: "load-popular", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getRatedMovies().then((movies) => {
      dispatch({ type: "load-toprated", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        popular: state.popular,
        toprated: state.toprated,
        addToWatchList: addToWatchList,
        addToFavorites: addToFavorites,
        addReview: addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;