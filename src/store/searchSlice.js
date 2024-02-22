import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "",
    suggestions: [],
    focus: false,
    LRUCache: {},
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
    setFocus: (state, action) => {
      state.focus = action.payload;
    },
    setLRUCache: (state, action) => {
      state.LRUCache = { ...state.LRUCache, ...action.payload };
    },
  },
});

export const { setSearch, setSuggestions, setFocus, setLRUCache } =
  searchSlice.actions;
export default searchSlice.reducer;
