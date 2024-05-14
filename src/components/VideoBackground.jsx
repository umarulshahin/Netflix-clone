import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ movie_id }) => {
  const trailerVedio = useSelector((store) => store.movies?.trailerVedio);
  useMovieTrailer(movie_id);
  return (
    <div>
      <iframe
        className=" w-screen aspect-video "
        src={"https://www.youtube.com/embed/" + trailerVedio?.key + "?autoplay=1&&mute=1"} 
        frameborder='0'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        >
        </iframe>
    </div>
  );
};

export default VideoBackground;
