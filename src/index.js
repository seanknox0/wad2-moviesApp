import React from "react";
import 'semantic-ui-css/semantic.min.css';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import WelcomePage from './pages/welcomePage';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import FavoriteMoviesPage from './pages/favoriteMoviesPage';
import PopularPeoplePage from "./pages/popularPeoplePage";
import PersonPage from "./pages/personDetailsPage";
import WatchListPage from "./pages/watchListPage";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import PrivateRoute from './routes/privateRoute';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import AuthContextProvider from "./contexts/authContext";

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
    <AuthContextProvider>
    <SiteHeader />      
      <div className="container-fluid">
        <MoviesContextProvider>
        <GenresContextProvider>
          <Switch>
            <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
            <PrivateRoute path="/reviews/:id" component={MovieReviewPage} /> 
            <PrivateRoute path="/upcoming" component={UpcomingMoviesPage} />
            <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
            <PrivateRoute exact path="/watchlist" component={WatchListPage} />
            <PrivateRoute path="/movies/:id" component={MoviePage} />
            <PrivateRoute path="/person/:id" component={PersonPage} />
            <PrivateRoute path="/person" component={PopularPeoplePage} />
            <PrivateRoute path="/movies" component={HomePage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/" component={WelcomePage} />
            <Redirect from="*" to="/" />
          </Switch>
        </GenresContextProvider>
        </MoviesContextProvider>
      </div>
      </AuthContextProvider>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));