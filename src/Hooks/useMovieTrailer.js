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
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          API_Options
        );

        const json = await data.json();

        console.log("API RESPONSE:", json.results);

        // 🚫 no videos
        if (!json.results || !json.results.length) {
          dispatch(addTrailerVideo({ movieId, trailer: null }));
          return;
        }

        const trailerVideo =
          json.results.find(
            (v) => v.type === "Trailer" && v.site === "YouTube"
          ) || json.results.find((v) => v.site === "YouTube");

        console.log("FOUND TRAILER:", trailerVideo);

        // 🚫 no trailer
        if (!trailerVideo) {
          dispatch(addTrailerVideo({ movieId, trailer: null }));
          return;
        }

        // ✅ success
        dispatch(addTrailerVideo({ movieId, trailer: trailerVideo }));
      } catch (error) {
        console.error(error);
        dispatch(addTrailerVideo({ movieId, trailer: null }));
      }
    };

    fetchTrailer();
  }, [movieId, dispatch]);
};

export default useMovieTrailer;