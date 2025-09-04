import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieContainer from './components/MovieContainer';
import NavBar from './components/NavBar';
import MovieForm from './components/MovieForm';
import About from './components/About';
import Footer from './components/Footer';
import './Stylesheets/App.css';


const App = ()=>{

  const [appMovies , setAppmovies ] = useState(()=>{
  
    const storedMovies = localStorage.getItem('storedMovies')
  
    return storedMovies ? JSON.parse(storedMovies) : appMovies;


  });

  
  useEffect(()=>{

    localStorage.setItem('storedMovies', JSON.stringify(appMovies));

  }, [appMovies]);

  return(    
    
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<MovieContainer appMovies={appMovies} />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/addamovie' element={<MovieForm setAppmovies={setAppmovies}/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>    
  )
}

export default App
