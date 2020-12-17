# Assignment 1 - ReactJS app.

Name: Sean Knox

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Feature 1 - Watch-List view, after labs i added a view similar to the add favourites view where it displays the upcoming movies tagged as watch list movies. This allows the users to store and view the movies they would like to view in the future.
 + Feature 2 - Added a popular movies page, displays the top 20 most popular movies right now and allows you to add any movie to the favourites page. The purpose of this page is to show the user what most people are watching right now. 
 + Feature 3 - Added a top rated page which displays the top 20 highest rated movies of all time. This page allows users to view the best movies (according to the general public). These movies can also be added to the faourites page.
 + Feature 4 - Added a popular people page where the user can view the top 20 most popular people in the movies industry right now. They are displayed on cards with their popularity rank also.
 + Feature 5 - Added a link to the people cards to allow users to view personal details of the popular people. Information consists of Birthplace, birthday, biography etc.
 + Feature 6 - Added a link to each actor/actress through the credits page in a movie details view. This allows a user to view the credits and when they would like to query an actors details they can just click the name in the table.

## Setup requirements (If required).

...... A brief explanation of any non-standard setup steps necessary to run your app/client locally (after cloning the repo) ........

+ There are no setup requirements. 

## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1 - get first page, english language, and dont include adult films of the most popular movies.
+ https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1 - get first page, english language, and dont include adult films of the top rated movies.
+ https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US - gets the credits (cast and crew) of a movie. English language.
+ https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1 -gets the first page and english language of the most popular people in the movies industry.
+ https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US - gets details of people, english language.

## App Design.

### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][popularMovies]
>Shows the most popular movies right now, can add to favourites and search based on text and genre. Details can be viewed by clicking card.

![][topratedMovies]
>Shows the top rated movies of all time, can add to favourites and search based on text and genre. Details can be viewed by clicking card.

![][watchList]
>Shows the users watch list of upcoming movies. A review can also be written for when the user is done watching the movie. Details can be checked.

![][popularPeople]
>Shows the most popular people in the movies industry, picture and popularity displayed. Details can be checked.

![][peopleDetails]
>Shows personal details of a person. Including biography, birthplace etc.

![][movieDetail]
>Added the show credits button to display the credits of the movie.

![][moviesCredits]
>Displays 2 tables, one for crew and one for cast. Shows their job and character played. 

![][movieReviews]
>Updated table with Semantic UI.

![][writeReview]
>Updated the form with Semantic UI.

![][cardUpdate]
>Updated the cards with Semantic UI.


## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/${id}/credits (public) - displays the cast and crew credits of a movie in two tables.
+ /movies/popular (public) - displays most popular movies in a card format, can be added to favourites and details can be viewed if the card is clicked. 
+ /movies/toprated (public) - displays top rated movies in a card format, can be added to favourites and details can be viewed if the card is clicked.
+ /movies/watchlist (public) - added a view for the upcoming movies that are tagged as watch later by the user. Can write a review about them if action button is clicked. 
+ /person/:id (public) - displays the details of a particular person. Biography, birthplace, birthday, their profession etc. Also includes a picture of the person.
+ /person (public) - displays the most popular people in the movie industry, displayed in a card format with a picture of the person and their popularity rank beneath them. Details can be viewed if the card is clicked.


### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][movieCardLink]
>Clicking the movie card will display movie details.

![][peopleCardLink]
>Clicking the people card will display people details.

![][peopleLink]
>Clicking the link of a person in the table will display people details.

## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).

+ Imported semantic UI support with 'npm', I used sematic UI for most of my pages to givee it a more dynamic and clean UI.
+ Used code from the following article which allowed me to not have duplicate movies in the favourites page. The code uses ES6 Sets to remove duplicates from an array. This can be seen in my favoriteMoviesPage.js file.
https://dev.to/marinamosti/removing-duplicates-in-an-array-of-objects-in-js-with-sets-3fep

---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[stories]: ./public/storybook.png
[movieCardLink]: ./public/movieCardLink.png
[peopleCardLink]: ./public/peopleCardLink.png
[peopleLink]: ./public/peopleLink.png
[topratedMovies]: ./public/topratedMovies.png
[popularMovies]: ./public/popularMovies.png
[watchList]: ./public/watchList.png
[popularPeople]: ./public/popularPeople.png
[peopleDetails]: ./public/peopleDetails.png
[movieDetail]: ./public/movieDetail.png
[moviesCredits]: ./public/moviesCredits.png
[movieReviews]: ./public/movieReview.png
[writeReview]: ./public/writeReview.png
[cardUpdate]: ./public/cardUpdate.png