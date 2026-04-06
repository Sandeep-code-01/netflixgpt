import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  useNowPlayingMovies();

  const movies = useSelector((state) => state.movies.nowPlayingMovies);

  const [mainMovie, setMainMovie] = useState(null);

  useEffect(() => {
    if (!movies || !movies.length) return;

    // ✅ simple: first movie
    setMainMovie(movies[0]);
  }, [movies]);

  if (!mainMovie) return null;

  const { original_title, overview, id, backdrop_path } = mainMovie;

  return (
    <div className="relative h-[600px] md:h-[700px]">

      {/* ✅ video (only if trailer exists) */}
      <VideoBackground movieId={id} />

      {/* ✅ fallback image */}
      <img
        className="w-full h-full object-cover absolute top-0 left-0 -z-20"
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        alt="background"
      />

      {/* ✅ title */}
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;