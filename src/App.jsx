import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieContainer from './components/MovieContainer';
import NavBar from './components/NavBar';
import MovieForm from './components/MovieForm';
import About from './components/About';
import './Stylesheets/App.css';


const App = ()=>{

  return(    
    
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<MovieContainer/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/addamovie' element={<MovieForm/>}/>
        </Routes>
    </BrowserRouter>    
  )
}

export default App
