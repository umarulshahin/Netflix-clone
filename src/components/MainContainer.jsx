import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store=> store.movies?.nowPlayingMovies);
    console.log(movies)
    if(!movies) return
    
    const MainMovie = movies[2]
     const {original_title,overview,id} = MainMovie
  return (
    <div>
       <VideoTitle title={original_title} overview={overview} />
       <VideoBackground movie_id={id}  />
    </div>
  )
}

export default MainContainer;