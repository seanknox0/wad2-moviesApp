import React from "react";
import 'semantic-ui-css/semantic.min.css'
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"
import FavoriteMoviesPage from './pages/favoriteMoviesPage'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import AuthContextProvider from "./contexts/authContext";

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
    <SiteHeader />      
      <div className="container-fluid">
        <AuthContextProvider>
        <MoviesContextProvider>
        <GenresContextProvider>
          <Switch>
            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route path="/reviews/:id" component={MovieReviewPage} /> 
            <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
            <Route path="/movies/:id" component={MoviePage} />
            <Route path="/home" component={HomePage} />
            <Route path="/" component={LoginPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </GenresContextProvider>
        </MoviesContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));