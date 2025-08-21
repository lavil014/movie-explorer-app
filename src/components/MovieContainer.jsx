import React from "react";
import movies from '../data/movies.json'
import Card from "./MovieCard";

import '../Stylesheets/MovieContainer.css'

const MovieContainer = ()=>{
  
  return(

    <div className="movieContainer">

      {
        movies.length > 0? 
        
        movies.map((movie)=>{

          const {id, title, director, year, rating, poster,genre} = movie;

          return(
            <Card key={id}>
              <h2>{title}</h2>
              <img src={poster} alt={title} />
              <p>{rating}</p>
              <p>{genre}</p>
            </Card>
          )
        })

        
        : <h1><span>Movies are comming soon !</span></h1>
      }
    </div>
  )
}

export default MovieContainer;