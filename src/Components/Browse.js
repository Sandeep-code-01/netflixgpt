import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";

import { useSelector } from "react-redux";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  // API calls (Custom Hooks)
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Header */}
      <Header />

      {/* 👇 IMPORTANT: Push content below header */}
      <div className="pt-20">
        {showGPTSearch ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />

            {/* Movie Lists Section */}
            <div className="relative z-20 -mt-70 px-4 md:px-8">
              <SecondaryContainer />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;