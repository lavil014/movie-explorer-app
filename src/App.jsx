import Footer from './components/Footer';
import LayOut from './components/Layouts';
import MovieContainer from './components/MovieContainer';
import Header from './components/Header';
import './Stylesheets/App.css';

const App = ()=>{

  return(

    <div>
      <LayOut>
        <Header/>
        <MovieContainer/>
        <Footer/>
      </LayOut>     
    </div>    
  )
}

export default App
