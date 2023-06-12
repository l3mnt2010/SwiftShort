import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const authSlide = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      (state.user = null), (state.isLoading = true), (state.error = null);
    },
    loginSuccess: (state, action) => {
      (state.user = action.payload),
        (state.isLoading = false),
        (state.error = null);
    },
    loginFailed: (state, action) => {
      (state.error = action.payload),
        (state.isLoading = false),
        (state.user = null);
    },
    registerStart: (state) => {
      (state.user = null), (state.isLoading = true), (state.error = null);
    },
    registerSuccess: (state, action) => {
      (state.user = action.payload),
        (state.isLoading = false),
        (state.error = null);
    },
    registerFailed: (state, action) => {
      (state.error = action.payload),
        (state.isLoading = false),
        (state.user = null);
    },
  },
});

export const {
  loginFailed,
  loginStart,
  loginSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
} = authSlide.actions;

export default authSlide.reducer;
