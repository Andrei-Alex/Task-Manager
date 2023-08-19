import { createSlice } from "@reduxjs/toolkit";
import { ITheme } from ".";

const initialState: ITheme = {
  isDarkMode: false,
};
export const ThemeSlice = createSlice({
  name: "Theme",
  initialState: initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});
export const setDarkMode = ThemeSlice.actions.toggleTheme;
