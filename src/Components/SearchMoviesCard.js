import React from "react";

const MovieCard = ({ movie }) => {
  if (!movie) return null;

  const imageUrl = movie.poster_path
    ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
    : "https://via.placeholder.com/200x300?text=No+Image";

  return (
    <div className="w-[200px] cursor-pointer group">
      
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        
        <img
          src={imageUrl}
          alt={movie.title}
          className="w-full h-[300px] object-cover 
          transform group-hover:scale-110 
          transition duration-500 ease-in-out"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 
        group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-3">
          
          <p className="text-white text-sm font-semibold line-clamp-2">
            {movie.title}
          </p>

          <p className="text-green-400 text-xs mt-1">
            ⭐ {movie.vote_average}
          </p>
        </div>

        {/* Rating badge */}
        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
          ⭐ {movie.vote_average}
        </div>

      </div>
    </div>
  );
};

export default MovieCard;