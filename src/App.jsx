import MovieCard from './components/MovieCard';
import movies from './data/movies.json'
import './Stylesheets/App.css';

const App = ()=>{

  return(
    <main className='appContainer'>
      
      <h1 className='appHeader'>Movie Explorer App</h1>
      <div className='movieContainer'>  
        {

          movies.length > 0 ?
          movies.map((movie)=>{
            

            const {id, title, director, year, rating, poster,genre} = movie;

            return(
              <MovieCard key={id} title={title} year={year} rating={rating} poster={poster} genre={genre}/>
            )
            

          }) : <span>Movies are comming soon !</span>
        }
      </div>
    </main>
  )
}

export default App
