import React from "react";
import { Route,useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow"

function MoviesPage({ movies }) {
  const matchedRoute = useRouteMatch();
  console.log(matchedRoute);
  return (
    <div>
      <MoviesList movies={movies} />

      <Route exact path={matchedRoute.url}>
        <h3>Please chose a movie from those selected in the list.</h3>
        </Route> 
      <Route path={`${matchedRoute.url}/:movieId`}>
        <MovieShow movies={movies}/>
      </Route>

     
    </div>
  );
}
export default MoviesPage;
