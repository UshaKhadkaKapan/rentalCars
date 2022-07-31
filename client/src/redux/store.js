import { configureStore } from "@reduxjs/toolkit";
import carSliceReduce from "./sliceReducer/carSliceReduces";

export const store = configureStore({
  reducer: {
    carDetails: carSliceReduce,
  },
});
