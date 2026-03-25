const MovieCard = ({ movie }) => {
  if (!movie || !movie.poster_path) return null;

  return (
    <div className="min-w-[200px] rounded-md">
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt={movie.title}
      />
    </div>
  );
};
export default MovieCard;