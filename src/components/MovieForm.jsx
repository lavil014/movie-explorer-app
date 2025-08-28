import '../Stylesheets/MovieForm.css'
import { useState } from 'react'


const MovieForm = ()=>{
  
  const [title, setTitle] = useState('');
  const [poster, setPoster] = useState('');
  const [rating, setRating] = useState(0);
  const [genre, setGenre] = useState('');
  const [year , setYear] = useState(0);
  const [director, setDirector] = useState('');
  const [description, setDescription] = useState('');




  const addMovie = ()=>{
    alert('Add your movie');
  }

  return (
    <div className="movie-form-container">
      <form action="">
        <label  htmlFor="">Title</label>
        <input id='movie-title' type="text" />
        <label htmlFor="">Poster</label>
        <input id='' type="file" accept='image/*'/>
        <label htmlFor="">Rating</label>
        <input id='' type="text" />
        <label htmlFor="">Genre</label>
        <input type="text" />
        <label htmlFor="">Year</label>
        <input type="text" />
        <label htmlFor="">Director</label>
        <input type="text" />
        <label htmlFor="">Description</label>
        <input type='text-area' />

        <button type="button" >Add movie</button>
      </form>
    </div>
  )

}

export default MovieForm;