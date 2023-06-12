import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "@/services/services.auth";
import { Login } from "@/interfaces/interface.global";

const initialState = {
  state: null,
};

export const resetPassword = createAsyncThunk(
  "reset_password",
  async (data: Login, thunkAPI) => {
    const res = await API.put("/user/reset-password", data);
    return res.data;
  }
);

export const linkSlide = createSlice({
  name: "resetpassword",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.state = action.payload;
    });
  },
});
