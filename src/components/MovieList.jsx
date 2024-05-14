import React from 'react'
import MovieCard from './MovieCard'
import "./movieList.css"

const  MovieList = ({title,movies}) => {
  return (movies &&(
    <div className='px-4'>
        <h1 className='text-xl font-medium py-2 text-white'>{title}</h1>
        <div className='movie_List flex overflow-x-scroll'>
            <div className='flex '>
              {movies.map(movie=> <MovieCard posterPath={movie.poster_path} />)}

            </div>
        </div>
    </div>
  )
  )
}

export default MovieList