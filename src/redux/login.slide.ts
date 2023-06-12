import {
  AuthState,
  Login,
  LoginResponse,
  LoginUser,
} from "@/interfaces/interface.global";
import { API } from "@/services/services.auth";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

export const Login_user = createAsyncThunk(
  "auth/login",
  async (data: Login, { rejectWithValue }) => {
    try {
      const response = await API.post("/auth/login", data);
      localStorage.setItem("access_token", response.data.access_token);
      return response.data;
    } catch (error) {
      return rejectWithValue("Đã xảy ra lỗi khi đăng nhập");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Login_user.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder
      .addCase(
        Login_user.fulfilled,
        (state, action: PayloadAction<LoginUser>) => {
          state.isLoading = false;
          state.user = action.payload;
          state.error = null;
        }
      )
      .addCase(Login_user.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});
export default authSlice;
