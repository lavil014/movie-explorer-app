import React from "react";
import '../Stylesheets/MovieCard.css';


const MovieCard = ({title, director,year,poster, rating, genre})=>{

  return(
    <div className="cardContainer">
      <h3 className="movieTitle">{title}</h3>
      <h4 className="movieDirector">{director}</h4>
      <p className="movieYear">{year}</p>
      <img  className ="moviePoster" src={poster} alt={title}/>
      <p className="movieRating">Rating : {rating}</p>
      <p className="movieGenre">Genre : {genre}</p>
    </div>
  )
}

export default MovieCard;