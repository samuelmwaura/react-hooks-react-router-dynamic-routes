import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({movies}){

const routeParams =useParams();
console.log(routeParams);
    return(
        <div>
            <h3>{movies[routeParams.movieId].title}</h3>
        </div>
    )
}

export default MovieShow;