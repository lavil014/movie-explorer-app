import '../Stylesheets/MovieForm.css'
import { useState } from 'react'

import movies from '../data/movies.json'

const MovieForm = ()=>{

  const [movieData, setMovieData] = useState({
    title : '',
    poster : '',
    rating : '',
    genre : '',
    year : '',
    director : '',
    description : ''
  })

  const [newMovieData, setNewMovieData]= useState(movies);

  const {title, poster,rating,genre,year,director,description} = movieData;


  const manageMovieData = (e)=>{

    const {name, value} = e.target;
    let updatedValue = value;


    if(name === 'rating' || name === 'year'){

      updatedValue = Number(value);     

      if(updatedValue === ''){
        updatedValue = 0
      }
    
    }else{
      updatedValue = value;
    }

    
      setMovieData((prevData)=>({
        ...prevData,
        [name] : updatedValue
      }));

  }


  const addMovie = (e)=>{
    e.preventDefault()
 
    setNewMovieData((prevMovies =>[...prevMovies, movieData]));
    
    setMovieData({
   
      title : '',
      poster : '',
      rating : '',
      genre : '',
      year : '',
      director : '',
      description : ''
    })


  }

  console.log(newMovieData)
  
  
  return (
    <div className="movie-form-container">
      <form onSubmit={addMovie} action="">
        <label  htmlFor="">Title</label>
        <input name='title' value={title} onChange={manageMovieData} id='movie-title' type="text" />
        <label htmlFor="">Poster</label>
        <input name='poster' value={poster} onChange={manageMovieData} type="text"/>
        <label htmlFor="">Rating</label>
        <input name='rating' value={rating} onChange={manageMovieData} type="number" />
        <label htmlFor="">Genre</label>
        <input name='genre' value={genre} onChange={manageMovieData} type="text" />
        <label htmlFor="">Year</label>
        <input name='year' value={year} onChange={manageMovieData} type="number" />
        <label htmlFor="">Director</label>
        <input name='director' value={director} onChange={manageMovieData} type="text" />
        <label htmlFor="">Description</label>
        <textarea name="description" value={description} onChange={manageMovieData} id=""></textarea>
        <button type="submit">Add movie</button>
      </form>
    </div>
  )

}

export default MovieForm;