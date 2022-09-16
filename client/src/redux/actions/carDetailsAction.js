import { getCardetails, postCarDetailAdmin } from "../../helper/axios-helper";
import { setCarDetails } from "../sliceReducer/carSliceReduces";
import { toast } from "react-toastify";

export const getCarDetailsAction = () => async (dispatch) => {
  const { status, message, result } = await getCardetails();

  status === "success" && dispatch(setCarDetails(result));
};

export const addCarDetailsAction = (obj) => async (dispatch) => {
  const { status, message } = await postCarDetailAdmin(obj);

  if (status === "success") {
    toast.success(message);
    setTimeout(() => {
      window.location.href = "/admin";
    }, 500);
  } else {
    toast.error(message);
  }
};
