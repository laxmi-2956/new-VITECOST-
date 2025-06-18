import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
  message: null,
};

export const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupStart: (state) => {
      state.loading = true;
    },
    signupSuccess: (state) => {
      state.loading = false;
      state.message = "Signup successful";
    },
    signupError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signinStart: (state) => {
      state.loading = true;
    },
    signinSuccess: (state, action) => {
      state.loading = false;
      state.message = "Signin successful";
      state.user = action.payload;
    },
    signinError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  signupStart,
  signupSuccess,
  signinStart,
  signinError,
  signinSuccess,
  signupError,
} = authslice.actions;


export default authslice.reducer
