import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "@/services/services.auth";
import { AllLink } from "@/interfaces/interface.global";

const initialState: AllLink = {
  data_link: null,
};

export const getLink = createAsyncThunk("getlink", async (_, thunkAPI) => {
  const res = await API.get("/links");
  return res.data;
});

export const linkSlide = createSlice({
  name: "getlink",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getLink.fulfilled, (state, action) => {
      state.data_link = action.payload;
    });
  },
});
