import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addUpcomingMovie } from "../Utils/moviesSlice";
import { API_Options } from "../Utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_Options
      );

      const json = await data.json();
     

      dispatch(addUpcomingMovie(json.results));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;