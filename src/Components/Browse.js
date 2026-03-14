import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="bg-black min-h-screen relative">
      <Header />
      <MainContainer />
      <SecondaryContainer />  
    </div>
  );
};

export default Browse;