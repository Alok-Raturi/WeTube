import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    SidebarToggle: false,
  },
  reducers: {
    toggleSidebar: (state, actions) => {
      state.SidebarToggle = !state.SidebarToggle;
    },
    closeSidebar: (state, actions) => {
      state.SidebarToggle = false;
    },
  },
});

export const { toggleSidebar, closeSidebar } = appSlice.actions;

export default appSlice.reducer;
