import { toast } from "react-toastify";
import { getBookingDetails, postBookingCar } from "../../helper/axios-helper";
import { setBookingDetails } from "../sliceReducer/bookingDetailsReducer";

export const bookingCarAction = (obj) => async (dispatch) => {
  const { status, message, newBooking } = await postBookingCar(obj);

  if (status === "success") {
    toast.success(message);
    setTimeout(() => {
      window.location.href = "/userBooking";
    }, 500);
  } else {
    toast.error(message);
  }
};

export const getBookingDetailsAction = () => async (dispatch) => {
  const { status, message, result } = await getBookingDetails();

  status === "success" && dispatch(setBookingDetails(result));
};
