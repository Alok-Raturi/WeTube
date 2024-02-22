import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import homeVideoSlice from "./homeVideoSlice";
import watchSlice from "./watchSlice";
import searchSlice from "./searchSlice";
import searchResultsSlice from "./searchResultsSlice";

const app = configureStore({
  reducer: {
    app: appReducer,
    home: homeVideoSlice,
    watch: watchSlice,
    search: searchSlice,
    searchResults: searchResultsSlice,
  },
});

export default app;
