import React from 'react'
import MovieCard from './MovieCard'

const  MovieList = ({title,movies}) => {
  return (movies &&(
    <div className='px-4'>
        <h1 className='text-xl font-medium py-2 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll overscroll-x-none'>
            <div className='flex '>
              {movies.map(movie=> <MovieCard posterPath={movie.poster_path} />)}

            </div>
        </div>
    </div>
  )
  )
}

export default MovieList