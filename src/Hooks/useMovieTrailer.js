import { useEffect } from "react";
import { API_Options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../Utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const fetchTrailer = async () => {
      try {
        console.log("Fetching trailer for movieId:", movieId);

        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          API_Options
        );
        const json = await data.json();
        console.log("Video results:", json.results);

        if (!json.results || !json.results.length) {
          console.log("No videos available for this movie.");
          return;
        }

        const trailerVideo =
          json.results.find(v => v.type === "Trailer" && v.site === "YouTube") ||
          json.results.find(v => v.site === "YouTube");

        if (!trailerVideo) {
          console.log("No YouTube trailer available for this movie.");
          return;
        }

        console.log("Selected trailer:", trailerVideo);
        dispatch(addTrailerVideo(trailerVideo));

      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    fetchTrailer();
  }, [movieId, dispatch]);
};

export default useMovieTrailer;