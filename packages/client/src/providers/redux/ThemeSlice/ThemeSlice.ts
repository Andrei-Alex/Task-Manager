import { createSlice } from "@reduxjs/toolkit";
import { ITheme } from ".";

const initialState: ITheme = {
  theme: {
    isDarkMode: false,
  },
};
export const ThemeSlice = createSlice({
  name: "Theme",
  initialState: initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme.isDarkMode = !state.theme.isDarkMode;
    },
  },
});
export const setDarkMode = ThemeSlice.actions.toggleTheme;
