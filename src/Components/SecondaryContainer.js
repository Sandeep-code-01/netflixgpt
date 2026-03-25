import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {

  const movies = useSelector((state) => state.movies);

  if (!movies) return null;

  return (
    <div className="w-full h-full -mt-56 relative z-20">
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
      <MovieList title="Popular" movies={movies.popularMovies}/>
      <MovieList title="Top Rated" movies={movies.topRatedMovies}/>
      <MovieList title="Upcoming" movies={movies.upcomingMovies}/>
    </div>
  );
};

export default SecondaryContainer;