import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  // fallback if trailerVideo is null
  const videoKey = trailerVideo?.key || "dQw4w9WgXcQ"; // default video key
  const videoTitle = trailerVideo?.name || "Default Trailer";

  return (
    <div className="w-screen h-[600px] relative -z-10">
      <iframe
        className="w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoKey}`}
        title={videoTitle}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  );
};

export default VideoBackground;