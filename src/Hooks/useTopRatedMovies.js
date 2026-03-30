import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovie } from "../Utils/moviesSlice";
import { API_Options } from "../Utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated",
        API_Options
      );

      const json = await response.json();

      // Ensure there are results before dispatching
      if (!json.results || !json.results.length) return;

      dispatch(addTopRatedMovie(json.results));
    } catch (error) {
      console.error("Error fetching top rated movies:", error);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;