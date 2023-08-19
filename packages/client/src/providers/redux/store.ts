import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./AuthSlice";
import { ThemeSlice } from "./ThemeSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    theme: ThemeSlice.reducer,
  },
});
export default store;
