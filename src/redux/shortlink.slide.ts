import {
  AuthRegister,
  Register,
  ResRegister,
  ShortLink,
  UserAlreadyExist,
} from "@/interfaces/interface.global";
import { API } from "@/services/services.auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: ShortLink = {
  originalLinks: "",
};

export const shortLink_Data = createAsyncThunk(
  "short_link",
  async (data: ShortLink, _thunkAPI) => {
    try {
      const res = await API.post("/links", data);
      if (res.data.statusCode == 401 && res.data.message == "Unauthorized") {
        _thunkAPI.rejectWithValue("Unauthorized");
      }
      return res.data;
    } catch (e) {
      return _thunkAPI.rejectWithValue("xảy ra lỗi khi short");
    }
  }
);

export const shortSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(shortLink_Data.fulfilled, (state, action) => {
      state.originalLinks = action.payload;
    });
  },
});
