import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
  },
  reducers: {
    togglegptSearch: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
  },
});

export const { togglegptSearch } = gptSlice.actions;
export default gptSlice.reducer;