import { createSlice } from "@reduxjs/toolkit";

const watchSlice = createSlice({
  name: "watch",
  initialState: {
    watch: null,
    comments: null,
    recommendations: [],
  },
  reducers: {
    addWatchVideo: (state, action) => {
      state.watch = action.payload;
    },
    addComments: (state, action) => {
      state.comments = action.payload;
    },
    addRecommendations: (state, action) => {
      state.recommendations = action.payload;
    },
  },
});

export const { addWatchVideo, addComments, addRecommendations } =
  watchSlice.actions;

export default watchSlice.reducer;
