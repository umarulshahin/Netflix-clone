import { useDispatch } from "react-redux";
import { APIoptions } from "../utils/constants";
import { addTrailervedio } from "../utils/moviesSlice";
import { useEffect } from "react";


const useMovieTrailer=(movie_id)=>{
    const dispatch=useDispatch();
   
    const getMovieVedios = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movie_id+"/videos?language=en-US",
        APIoptions
      );
  
      const json = await data.json();
      const filtermovie = json.results.filter(
        (vedio) => vedio.type === "Trailer"
      );
      console.log(filtermovie)
      console.log(json.results)

      const trailer = filtermovie.length ? filtermovie[0] : json.results[0];
      dispatch(addTrailervedio(trailer))
  
    };
  
    useEffect(() => {
      getMovieVedios();
    }, []);
  
};
export default useMovieTrailer