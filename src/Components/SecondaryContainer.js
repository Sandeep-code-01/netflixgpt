import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);

  if (!movies) return null;

  return (
    <div className="w-full relative z-20 -mt-[150px] md:-mt-[150px] px-16">
      {/* thoda aur niche shift */}
      <MovieList title="Upcoming" movies={movies.upcomingMovies}/>
      <MovieList title="Popular" movies={movies.popularMovies}/>
      <MovieList title="Top Rated" movies={movies.topRatedMovies}/>
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
    </div>
  );
};

export default SecondaryContainer;