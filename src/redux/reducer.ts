import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./login.slide";
import { dataSlice } from "./getuser.slice";
import registerSlice from "./register.slice";
import { linkSlide } from "./getlink.slice";
import showOnlyLink from "./showUser.slice";
import { shortSlice } from "./shortlink.slide";

export const reducer = combineReducers({
  login: authSlice.reducer,
  getuser: dataSlice.reducer,
  register: registerSlice.reducer,
  getlink: linkSlide.reducer,
  showonlylink: showOnlyLink.reducer,
  shortlink: shortSlice.reducer,
});
