import { useState, useEffect } from 'react';
import movies from '../data/movies.json'
import Card from "./MovieCard";

import '../Stylesheets/MovieContainer.css'

const MovieContainer = ()=>{


  const [appMovies , setAppmovies ] = useState(()=>{

    const storedMovies = localStorage.getItem('storedMovies')

    return storedMovies ? JSON.parse(storedMovies) : movies;
  });
  

  useEffect(()=>{

    localStorage.setItem('storedMovies', JSON.stringify(movies));

  }, [movies]);


  const currentYear = new Date().getFullYear();
  
  return(

    <div>
      <h1>Best movies of {currentYear} !</h1>

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
    </div>
  )
}

export default MovieContainer;