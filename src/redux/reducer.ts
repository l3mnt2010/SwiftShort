import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./login.slide";
import { dataSlice } from "./getuser.slice";
import registerSlice from "./register.slice";

export const reducer = combineReducers({
  login: authSlice.reducer,
  getuser: dataSlice.reducer,
  register: registerSlice.reducer,
});
