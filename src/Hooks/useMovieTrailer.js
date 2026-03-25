import { useEffect} from "react";
import { API_Options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../Utils/moviesSlice"; 


const useMovieTrailer = (movieId) => {
      const dispatch = useDispatch();
  
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_Options
    );

    const json = await data.json();


    const trailer = json.results.filter(video => video.type === "Trailer");

    const trailerVideo = trailer.length ? trailer[0] : json.results[0];

   

    dispatch(addTrailerVideo(trailerVideo));
  };

  useEffect(() => {
    getMovieVideos();
  }, [movieId]);

};

export default useMovieTrailer;
