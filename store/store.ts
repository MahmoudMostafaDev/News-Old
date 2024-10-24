import { configureStore, createSlice } from "@reduxjs/toolkit";
import preferencesSlice from "./preferencesSlice";

const authIntialState = {
  isAuth: true,
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
    preferences: preferencesSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
export default store;

export const logout = () => {
  return async (dispatch: AppDispatch) => {
    localStorage.setItem("token", "");
    localStorage.setItem("exp", "");
    dispatch(authActions.logout());
  };
};
export const loginAction = (data: any) => {
  return async (dispatch: AppDispatch) => {
    localStorage.setItem("token", data);
    const exp = new Date();
    exp.setMilliseconds(exp.getMilliseconds() + 24 * 60 * 60 * 1000);
    localStorage.setItem("exp", exp.toISOString());
    dispatch(authActions.login());
  };
};
