import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovie } from "../Utils/moviesSlice";
import { API_Options } from "../Utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_Options
      );

      const json = await response.json();

      // Only dispatch if results exist
      if (!json.results || !json.results.length) return;

      dispatch(addUpcomingMovie(json.results));
    } catch (error) {
      console.error("Error fetching upcoming movies:", error);
    }
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;