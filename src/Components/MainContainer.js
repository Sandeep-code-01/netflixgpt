import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  useNowPlayingMovies(); // fetch now playing movies

  const movies = useSelector((state) => state.movies.nowPlayingMovies);
  console.log("Now Playing Movies:", movies);

  const [mainMovie, setMainMovie] = useState(null);

  // pick the first movie with valid trailer
  useEffect(() => {
    if (!movies || !movies.length) return;

    for (let movie of movies) {
      if (movie.id) {
        setMainMovie(movie);
        break;
      }
    }
  }, [movies]);

  if (!mainMovie) return null;

  const { original_title, overview, id } = mainMovie;
  console.log("Main Movie Selected:", mainMovie);

  return (
    <div className="relative h-[600px] md:h-[700px]">
      <VideoBackground movieId={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;