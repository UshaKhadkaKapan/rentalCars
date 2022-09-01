import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userRegister: {},
};

const userRegisterSlice = createSlice({
  name: "userRegister",
  initialState,
  reducers: {
    setUserRegister: (state, { payload }) => {
      state.userRegister = payload;
    },
  },
});

const { reducer, actions } = userRegisterSlice;

export const { setUserRegister } = actions;

export default reducer;
