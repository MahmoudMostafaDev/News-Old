import { configureStore, createSlice } from "@reduxjs/toolkit";

const authIntialState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authIntialState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

export const authActions = authSlice.actions;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
