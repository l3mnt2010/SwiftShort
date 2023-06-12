import { GetLink } from "@/interfaces/interface.global";
import { createAction } from "@reduxjs/toolkit";

export const showUser = createAction<GetLink>("showUser");
