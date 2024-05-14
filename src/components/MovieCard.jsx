import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
  console.log(posterPath)
  return (
    <div className="w-48 pr-2">
      <img src={IMG_CDN_URL + posterPath} alt="movie images" />
    </div>
  )
}

export default MovieCard