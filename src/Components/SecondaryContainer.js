import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {

  const movies = useSelector((state) => state.movies);

  if (!movies?.nowPlayingMovies) return null;

  return (
    <div className="bg-black">
      <MovieList
        title="Now Playing"
        movies={movies.nowPlayingMovies}
      />
    </div>
  );
};

export default SecondaryContainer;