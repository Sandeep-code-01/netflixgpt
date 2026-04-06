import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../Utils/moviesSlice";
import { API_Options } from "../Utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing",
          API_Options
        );

        const json = await response.json();

        if (!json.results || !json.results.length) return;

        dispatch(addNowPlayingMovie(json.results));
      } catch (error) {
        console.error("Error fetching now playing movies:", error);
      }
    };

    fetchNowPlayingMovies();
  }, [dispatch]); // ✅ stable dependency
};

export default useNowPlayingMovies;