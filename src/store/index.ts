import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authSlide from "./auth/authSlide";
export const store = configureStore({
  reducer: authSlide,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector = () => useSelector();
