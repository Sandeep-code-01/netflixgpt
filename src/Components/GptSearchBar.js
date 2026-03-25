import React, { useRef, useState } from "react";
import lang from "../Utils/languageConstants";
import { useSelector } from "react-redux";
import { API_Options } from "../Utils/constants";
import SearchMovieCard from "./SearchMoviesCard";

const GptSearchBar = () => {
  const [movies, setMovies] = useState([]);
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

  const handleGptSearchClick = async () => {
    const query = searchText.current?.value;

    if (!query) return;

    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`,
        API_Options
      );

      const json = await data.json();

      // safety check
      if (!json?.results) {
        setMovies([]);
        return;
      }

      const filteredMovies = json.results.slice(0, 5);
      setMovies(filteredMovies);

    } catch (error) {
      console.error(error);
      setMovies([]);
    }
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="flex justify-center items-center pt-40">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex bg-black/80 backdrop-blur-md p-4 rounded-xl shadow-lg w-1/2"
        >
          <input
            ref={searchText}
            type="text"
            placeholder={lang[langKey]?.GptSearchPlaceholder}
            className="flex-grow p-4 rounded-l-xl bg-gray-800 text-white outline-none"
          />

          <button
            type="button"
            className="bg-red-600 hover:bg-red-700 transition text-white px-6 rounded-r-xl"
            onClick={handleGptSearchClick}
          >
            {lang[langKey]?.Search}
          </button>
        </form>
      </div>

      {/* Movies */}
      {movies.length > 0 && (
        <div className="mt-12 px-10 flex justify-center">
          <div className="flex gap-6 overflow-x-auto">
            {movies.map((movie) => (
              <SearchMovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;