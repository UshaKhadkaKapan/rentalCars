import { getCardetails } from "../../helper/axios-helper";
import { setCarDetails } from "../sliceReducer/carSliceReduces";

export const getCarDetailsAction = () => async (dispatch) => {
  const { status, message, result } = await getCardetails();

  status === "success" && dispatch(setCarDetails(result));
};
