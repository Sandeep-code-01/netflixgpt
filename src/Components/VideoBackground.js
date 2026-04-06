import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailerVideo = useSelector(
    (store) => store.movies.trailerVideos[movieId]
  );

  if (!trailerVideo) {
    return (
      <div className="w-screen h-[600px] bg-black text-white flex items-center justify-center">
        Loading Trailer...
      </div>
    );
  }

  if (!trailerVideo?.key) {
    return (
      <div className="w-screen h-[600px] bg-black text-white flex items-center justify-center">
        No Trailer Available
      </div>
    );
  }

  return (
    <div className="w-screen h-[600px] relative">
      <iframe
        className="w-full h-full object-cover scale-150"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}`}
        title={trailerVideo.name || "Trailer"}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div> */}
    </div>
  );
};

export default VideoBackground;