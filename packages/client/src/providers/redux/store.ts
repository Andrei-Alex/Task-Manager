import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./AuthSlice";
import { ThemeSlice } from "./ThemeSlice";

const rootReducer = combineReducers({
  auth: AuthSlice.reducer,
  theme: ThemeSlice.reducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
export type RootState = ReturnType<typeof rootReducer>;
