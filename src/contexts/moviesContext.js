import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getPopularMovies, getRatedMovies, getPopularPeople } from "../api/tmdb-api";

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
        popularPeople: [...state.popularPeople]
      };
    case "add-favorite-movies":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        popular: [...state.popular],
        toprated: [...state.toprated],
        upcoming: [...state.upcoming],
        popularPeople: [...state.popularPeople]
      };
    case "add-favorite-popular":
      return {
        popular: state.popular.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        movies: [...state.movies],
        toprated: [...state.toprated],
        upcoming: [...state.upcoming],
        popularPeople: [...state.popularPeople]
      };
    case "add-favorite-toprated":
      return {
        toprated: state.toprated.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        movies: [...state.movies],
        popular: [...state.popular],
        upcoming: [...state.upcoming],
        popularPeople: [...state.popularPeople]
      };
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], popular: [...state.popular], toprated: [...state.toprated], popularPeople: [...state.popularPeople] };

    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies], popular: [...state.popular], toprated: [...state.toprated], popularPeople: [...state.popularPeople] };

    case "load-popular":
      return { popular: action.payload.movies, upcoming: [...state.upcoming], movies: [...state.movies], toprated: [...state.toprated], popularPeople: [...state.popularPeople] };
    
    case "load-toprated":
      return { toprated: action.payload.movies, upcoming: [...state.upcoming], movies: [...state.movies], popular: [...state.popular], popularPeople: [...state.popularPeople] };

    case "load-popularPeople":
      return { popularPeople: action.payload.person, upcoming: [...state.upcoming], movies: [...state.movies], popular: [...state.popular], toprated: [...state.toprated] };

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
        popularPeople: [...state.popularPeople]
      };
    case "add-review-popular":
      return {
        popular: state.popular.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        toprated: [...state.toprated],
        upcoming: [...state.upcoming],
        movies: [...state.movies],
        popularPeople: [...state.popularPeople]
      };
    case "add-review-toprated":
      return {
        toprated: state.toprated.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        popular: [...state.popular],
        upcoming: [...state.upcoming],
        movies: [...state.movies],
        popularPeople: [...state.popularPeople]
      };
    default:
      return state;
  }
};

// add favoutite handlers for popular/top rated
const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], popular: [], toprated: [], popularPeople: [] });

  const addToFavoritesMovies = (movieId) => {
    const indexMovies = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite-movies", payload: { movie: state.movies[indexMovies]} });
  };

  const addToFavoritesPopular = (movieId) => {
    const indexPopular = state.popular.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite-popular", payload: { movie: state.popular[indexPopular]} });
  };

  const addToFavoritesToprated = (movieId) => {
    const indexToprated = state.toprated.map((m) => m.id).indexOf(movieId);
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

  useEffect(() => {
    getPopularPeople().then((person) => {
      dispatch({ type: "load-popularPeople", payload: { person } });
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
        popularPeople: state.popularPeople,
        addToWatchList: addToWatchList,
        addToFavoritesMovies: addToFavoritesMovies,
        addToFavoritesPopular: addToFavoritesPopular,
        addToFavoritesToprated: addToFavoritesToprated,
        addReviewMovies: addReviewMovies,
        addReviewPopular: addReviewPopular,
        addReviewToprated: addReviewToprated
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;