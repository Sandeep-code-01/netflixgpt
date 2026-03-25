import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {

  const trailervideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  if (!trailervideo) return null;

  return (
    <div className="w-screen -mt-40 relative z-0">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailervideo.key}?autoplay=1&mute=1&controls=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;