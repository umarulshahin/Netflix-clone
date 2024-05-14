
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
// import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {/* <GptSearch /> */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse;