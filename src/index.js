import React from "react";
import 'semantic-ui-css/semantic.min.css'
import { Segment } from 'semantic-ui-react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoriteMoviesPage'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage"
import MoviePage from './pages/movieDetailsPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import WatchListPage from "./pages/watchListPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import RatedMoviesPage from "./pages/topratedMoviesPage";
import PopularPeoplePage from "./pages/popularPeoplePage";

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
    <SiteHeader />      
      <div className="container-fluid">
        <MoviesContextProvider>
        <GenresContextProvider>
          <Switch>
            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route path="/movies/popular" component={PopularMoviesPage} />
            <Route path="/movies/toprated" component={RatedMoviesPage} />
            <Route path="/movies/upcoming" component={UpcomingMoviesPage} />
            <Route path="/reviews/:id" component={MovieReviewPage} /> 
            <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
            <Route exact path="/movies/watchlist" component={WatchListPage} />
            <Route path="/movies/:id" component={MoviePage} />
            <Route path="/person" component={PopularPeoplePage} />
            <Route path="/" component={HomePage} />
            <Redirect from="*" to="/" />
          </Switch>
        </GenresContextProvider>
        </MoviesContextProvider>
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));