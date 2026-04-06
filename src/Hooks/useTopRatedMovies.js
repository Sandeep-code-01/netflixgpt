import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovie } from "../Utils/moviesSlice";
import { API_Options } from "../Utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated",
        API_Options
      );

      const json = await response.json();

      if (!json.results || !json.results.length) return;

      dispatch(addTopRatedMovie(json.results));
    } catch (error) {
      console.error("Error fetching top rated movies:", error);
    }
  }, [dispatch]); // 👈 stable

  useEffect(() => {
    getTopRatedMovies();
  }, [getTopRatedMovies]);
};

export default useTopRatedMovies;