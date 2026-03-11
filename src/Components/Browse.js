import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="bg-black min-h-screen relative">
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;