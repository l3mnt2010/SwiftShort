import {
  AuthRegister,
  Register,
  ResRegister,
  UserAlreadyExist,
} from "@/interfaces/interface.global";
import { API } from "@/services/services.auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthRegister = {
  error: null,
  isLoading: false,
  response: null,
  isAlreadyExist: false,
};

export const Register_User = createAsyncThunk(
  "auth/register",
  async (data: Register, _thunkAPI) => {
    try {
      const res = await API.post("/auth/register", data);
      if (
        res.data.statusCode == 400 &&
        res.data.message == "User already exists"
      ) {
        initialState.isAlreadyExist = true;
        _thunkAPI.rejectWithValue("User already exists");
      }
      return res.data;
    } catch (e) {
      return _thunkAPI.rejectWithValue("xảy ra lỗi khi đăng kí");
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(Register_User.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.isAlreadyExist = false;
    });
    builder.addCase(
      Register_User.fulfilled,
      (state, action: PayloadAction<ResRegister>) => {
        state.isLoading = false;
        state.error = null;
        state.response = action.payload;
      }
    );
    builder.addCase(Register_User.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
      state.response = null;
    });
  },
});

export default registerSlice;
