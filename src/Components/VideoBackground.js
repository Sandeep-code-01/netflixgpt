import React, { useEffect } from "react";
import { API_Options } from "../Utils/constants";

const VideoBackground = ({ movieId }) => {

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_Options
    );

    const json = await data.json();
    console.log(json);
    const trailer = json.results.filter(video => video.type === "Trailer");
      console.log(trailer);
  };


  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div>
      <iframe width="560" height="315" 
      src="https://www.youtube.com/embed/AFuE1LRxm80?si=kDCdDckRLRUoYW8-" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
};

export default VideoBackground;