import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: false,
  error: null,
  loading: false,
  isSignInPage: false,
  showSharePopup: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.error = false;
      state.loading = false;
    },
    signInfailed: (state, action) => {
      state.error = true;
      state.loading = false;
    },
    setIsSignInPage: (state, action) => {
      state.isSignInPage = action.payload;
    },
    setSharePopUp: (state, action) => {
      state.showSharePopup = action.payload;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInfailed,
  setIsSignInPage,
  setSharePopUp,
} = userSlice.actions;
export default userSlice.reducer;
