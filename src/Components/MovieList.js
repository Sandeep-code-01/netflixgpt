import React from 'react'
import MovieCart from './MovieCart'

const MovieList = ({ title, movies }) => {
    console.log(movies)
  return (
    <div className='w-full h-full flex flex-col gap-4'>
        <h1>{title}</h1>
        <div className='flex gap-2 overflow-x-scroll'>
        {movies.map((movie) => (
          <MovieCart key={movie.id} Poster_path={movie.poster_path} />
        ))}
        </div>
    </div>
  )
}

export default MovieList