import authapi from "./authAPI";
import { Dispatch } from "redux";
import { Login, Register } from "@/interfaces/interface.global";
import {
  loginStart,
  loginSuccess,
  loginFailed,
  registerStart,
  registerSuccess,
  registerFailed,
} from "./authSlide";

export const login = (credentials: Login) => async (dispatch: Dispatch) => {
  try {
    dispatch(loginStart());
    const user = await authapi.login(credentials);
    dispatch(loginSuccess(user));
  } catch (error: any) {
    dispatch(loginFailed(error.message));
  }
};

export const register = (userData: Register) => async (dispatch: Dispatch) => {
  try {
    dispatch(registerStart());
    const user = await authapi.register(userData);
    dispatch(registerSuccess(user));
  } catch (error: any) {
    dispatch(registerFailed(error.message));
  }
};

export const resetpasswword =
  (data: Register) => async (dispatch: Dispatch) => {
    try {
      const resetpasswword = authapi.resetpassword(data);
    } catch (e) {
      console.log("failed to reset");
    }
  };
