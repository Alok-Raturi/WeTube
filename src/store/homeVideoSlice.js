import { createSlice } from "@reduxjs/toolkit";

const homeVideo = createSlice({
  name: "homeVideo",
  initialState: {
    homeVideo: null,
  },
  reducers: {
    setHomeVideo: (state, action) => {
      state.homeVideo = action.payload;
    },
  },
});

export const { setHomeVideo } = homeVideo.actions;

export default homeVideo.reducer;
