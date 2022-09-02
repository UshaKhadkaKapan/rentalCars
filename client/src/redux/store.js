import { configureStore } from "@reduxjs/toolkit";
import carSliceReduce from "./sliceReducer/carSliceReduces";
import userReducer from "./sliceReducer/userSlice";

export const store = configureStore({
  reducer: {
    carDetails: carSliceReduce,
    userRegister: userReducer,
  },
});
