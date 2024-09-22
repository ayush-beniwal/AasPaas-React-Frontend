import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    token: null,
    id: null,
    name: " ",
    email: " ",
    photo: " ",
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    logoutSuccess: (state, action) => {
      state.isLoggedIn = false;
      state.token = null;
      state.id = null;
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { loginSuccess, logoutSuccess } = userSlice.actions;
export const userReducer = userSlice.reducer;
