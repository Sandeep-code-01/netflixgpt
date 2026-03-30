import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="w-full flex flex-col gap-4 px-12 py-4">
      <h1 className="text-3xl font-bold text-white drop-shadow-lg">{title}</h1>
      <div className="flex gap-4 overflow-x-scroll">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;