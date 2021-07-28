/* eslint-disable indent */
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    hotel: null,
  },
  reducers: {
    setUser: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    setHotel: (state, action) => ({
      ...state,
      hotel: action.payload,
    }),

    setDefault: (state, action) => ({
      data: null,
    }),
  },
});

export const { setUser, setDefault, setHotel } = userSlice.actions;

export default userSlice.reducer;
