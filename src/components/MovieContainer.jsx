import React from "react";
import movies from '../data/movies.json'
import MovieCard from "./MovieCard";

import '../Stylesheets/MovieContainer.css'

const MovieContainer = ()=>{
  
  return(

    <div className="movieContainer">

      {
        movies.length > 0? 
        
        movies.map((movie)=>{

          const {id, title, director, year, rating, poster,genre} = movie;

          return(
            <MovieCard key={id} title={title} year={year} rating={rating} poster={poster} genre={genre}/>
          )
        })
        
        : <h1><span>Movies are comming soon !</span></h1>
      }
    </div>
  )
}

export default MovieContainer;