import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailerVideo = useSelector(
    (store) => store.movies.trailerVideos[movieId]
  );

  console.log("movieId:", movieId);
  console.log("trailer:", trailerVideo);

  // 🚫 null OR undefined → don't render
  if (!trailerVideo?.key) return null;

  return (
    <div className="w-screen h-[600px] relative -z-10">
      <iframe
        className="w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}`}
        title={trailerVideo.name || "Trailer"}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  );
};

export default VideoBackground;