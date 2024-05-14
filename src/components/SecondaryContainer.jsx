import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const moviesList = useSelector((store)=> store.movies);
  return (
    <div className='bg-black'>
      <div className='-mt-52  relative z-20'>
       <MovieList title={"Now Playing"} movies={moviesList?.nowPlayingMovies} />
       <MovieList title={"Trending"} movies={moviesList?.nowPlayingMovies} />
       <MovieList title={"Popular"} movies={moviesList?.PopularMovies} />
       <MovieList title={"Upcoming Movies"} movies={moviesList?.nowPlayingMovies} />
       <MovieList title={"Horror"} movies={moviesList?.nowPlayingMovies} />
       </div>

    </div>
  )
}

export default SecondaryContainer;