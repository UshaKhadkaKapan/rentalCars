import { configureStore } from "@reduxjs/toolkit";
import carSliceReduce from "./sliceReducer/carSliceReduces";
import userReducer from "./sliceReducer/userSlice";
import bookingDetailsReducer from "./sliceReducer/bookingDetailsReducer";

export const store = configureStore({
  reducer: {
    carDetails: carSliceReduce,
    userRegister: userReducer,
    bookingDetails: bookingDetailsReducer,
  },
});
