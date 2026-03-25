import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../Utils/moviesSlice";
import { API_Options } from "../Utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-IN&page=1",
        API_Options
      );

      const json = await data.json();
    

      dispatch(addPopularMovie(json.results));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;