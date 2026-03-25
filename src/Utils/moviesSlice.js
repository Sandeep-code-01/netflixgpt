import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,  
    topRatedMovies: null,
    upcomingMovies: null,
    trailerVideo: null,
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
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovie, addPopularMovie, addTopRatedMovie, addUpcomingMovie, addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;