import { createSlice } from "@reduxjs/toolkit";
import { ITheme } from ".";

const initialState: ITheme = {
  isDarkMode: false,
};
export const ThemeSlice = createSlice({
  name: "Theme",
  initialState: initialState,
  reducers: {
    toggleTheme: (state: ITheme, action) => {
      return {
        ...state,
        isDarkMode: !action.payload,
      };
    },
  },
});
export const toggleTheme = ThemeSlice.actions.toggleTheme;
