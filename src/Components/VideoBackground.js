import React, { use } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";



const VideoBackground = ({ movieId }) => {
const trailervideo = useSelector((state) => state.movies.trailerVideo);

useMovieTrailer(movieId);


  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailervideo?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;