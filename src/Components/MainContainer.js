import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useUpcomingMovies from "../Hooks/useUpcomingMovies"; // Now using Upcoming
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  useUpcomingMovies(); // Upcoming movies

  const movies = useSelector((state) => state.movies.upcomingMovies);

  const [mainMovie, setMainMovie] = useState(null);

  useEffect(() => {
    if (!movies || !movies.length) return;
    setMainMovie(movies[0]);
  }, [movies]);

  if (!mainMovie) return null;

  const { original_title, overview, id, backdrop_path } = mainMovie;

  return (
    <div className="relative w-full h-[650px] md:h-[700px] overflow-hidden">
      
      {/* Video or fallback image */}
      <VideoBackground movieId={id} />
      <img
        className="w-full h-full object-cover absolute top-0 left-0 -z-20"
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt="background"
      />

      {/* Title + Overview */}
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;