import { useEffect } from "react";
import { API_Options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../Utils/moviesSlice";

// Netflix default trailer (just some official Netflix clip)
const DEFAULT_TRAILER = "sBws8MSXN7A"; // YouTube key

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
        const videos = json.results;

        let trailerVideo = null;

        if (videos && videos.length > 0) {
          trailerVideo =
            videos.find((v) => v.type === "Trailer" && v.site === "YouTube") ||
            videos.find((v) => v.type === "Teaser" && v.site === "YouTube") ||
            videos.find((v) => v.site === "YouTube");
        }

        if (!trailerVideo) {
          trailerVideo = { key: DEFAULT_TRAILER }; // fallback
        }

        dispatch(addTrailerVideo({ movieId, trailer: trailerVideo }));
      } catch (error) {
        console.error("Trailer fetch error:", error);
        dispatch(addTrailerVideo({ movieId, trailer: { key: DEFAULT_TRAILER } }));
      }
    };

    fetchTrailer();
  }, [movieId, dispatch]);
};

export default useMovieTrailer;