import { User_Data, Users } from "@/interfaces/interface.global";
import { API } from "@/services/services.auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: User_Data = {
  data: [],
};
export const getUsers = createAsyncThunk("get_users", async (_, _thunkAPI) => {
  const response = await API.get("/user");
  return response.data;
});

// export const deleteUsers = createAsyncThunk(
//   "deleteUser",
//   async (postId: number, thunkAPI) => {
//     const response = await API.delete<Users>(`/users?page=1/${postId}`, {
//       signal: thunkAPI.signal,
//     });
//     return response.data;
//   }
// );
export const dataSlice = createSlice({
  name: "get",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    //     builder.addCase(deleteUsers.fulfilled, (state, action) => {
    //       const postId = action.meta.arg;
    //       state.data = state.data.filter((post) => post.id !== postId);
    //     });
  },
});
