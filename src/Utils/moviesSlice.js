import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerVideos: {}, // ✅ per movieId
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovies = action.payload;
    },

    // ✅ FINAL FIX (NO DELETE, ONLY SET)
    addTrailerVideo: (state, action) => {
      if (!action.payload) return;

      const { movieId, trailer } = action.payload;

      state.trailerVideos[movieId] = trailer; // can be object OR null
    },
  },
});

export const {
  addNowPlayingMovie,
  addPopularMovie,
  addTopRatedMovie,
  addUpcomingMovie,
  addTrailerVideo,
} = moviesSlice.actions;

export default moviesSlice.reducer;