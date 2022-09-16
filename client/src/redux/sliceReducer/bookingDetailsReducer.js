import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookingDetails: [],
};

const bookingDetailsReducer = createSlice({
  name: "bookingDetails",
  initialState,
  reducers: {
    setBookingDetails: (state, { payload }) => {
      state.bookingDetails = payload;
    },
  },
});

const { reducer, actions } = bookingDetailsReducer;

export const { setBookingDetails } = actions;

export default reducer;
