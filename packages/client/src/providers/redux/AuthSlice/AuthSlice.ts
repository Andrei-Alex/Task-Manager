import { createSlice } from "@reduxjs/toolkit";
import { IAuth } from ".";

/**
 * Auth state
 * @returns {Object}
 */
const initialState: IAuth = {
  auth: {
    user: null,
    token: null,
    error: null,
  },
};
export const AuthSlice = createSlice({
  name: "Auth",
  initialState: initialState,
  reducers: {
    setUser: (state: IAuth, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    setToken: (state: IAuth, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },
    setError: (state: IAuth, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },
  },
});
export const setUser = AuthSlice.actions.setUser;
export const setToken = AuthSlice.actions.setToken;
export const setError = AuthSlice.actions.setError;
