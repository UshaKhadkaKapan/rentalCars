import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1";
const cDEP = rootUrl + "/rentalcarrouter";
const registerEP = rootUrl + "/register";
const loginEP = registerEP + "/login";
const bookingEP = rootUrl + "/bookings/bookcar";
const bookingDetailsEP = bookingEP + "/getallbooking";
const adminAddCarEP = cDEP + "/addcar";
const adminEditCarEP = cDEP + "/editcar";
const adminDeleteCarEP = cDEP + "/deletecar";

const apiProcessor = async (method, url, data) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const getCardetails = () => {
  return apiProcessor("get", cDEP);
};

export const postClientRegisterDetails = (data) => {
  return apiProcessor("post", registerEP, data);
};

export const postClientLoginDetails = (data) => {
  return apiProcessor("post", loginEP, data);
};

export const postBookingCar = (data) => {
  return apiProcessor("post", bookingEP, data);
};

export const getBookingDetails = () => {
  return apiProcessor("get", bookingDetailsEP);
};

export const postCarDetailAdmin = (data) => {
  return apiProcessor("post", adminAddCarEP, data);
};

export const editCarDetailAdmin = (data) => {
  return apiProcessor("post", adminEditCarEP, data);
};

export const deleteCarDetailAdmin = (data) => {
  return apiProcessor("post", adminDeleteCarEP, data);
};
