import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovie } from "../Utils/moviesSlice";
import { API_Options } from "../Utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated",
        API_Options
      );

      const json = await data.json();
    

      dispatch(addTopRatedMovie(json.results));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;