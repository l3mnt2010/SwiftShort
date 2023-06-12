import { GetLink, OneLink } from "@/interfaces/interface.global";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState: OneLink = {
  data_link: null,
};

const showOnlyLink = createSlice({
  name: "showonlylink",
  initialState,
  reducers: {
    getLinkOnly: (state, action) => {
      let a = action.payload;
      return a;
    },
  },
});
export const { getLinkOnly } = showOnlyLink.actions;
export default showOnlyLink;
