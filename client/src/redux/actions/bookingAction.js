import { toast } from "react-toastify";
import { postBookingCar } from "../../helper/axios-helper";

export const bookingCarAction = (obj) => async (dispatch) => {
  const { status, message, result } = await postBookingCar(obj);

  if (status === "success") {
    toast.success(message);
  } else {
    toast.error(message);
  }
};
