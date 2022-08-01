import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carDetails: [],
};

const carSliceReducer = createSlice({
  name: "carDetails",
  initialState,
  reducers: {
    setCarDetails: (state, { payload }) => {
      state.carDetails = payload;
    },
  },
});

const { reducer, actions } = carSliceReducer;

export const { setCarDetails } = actions;

export default reducer;
