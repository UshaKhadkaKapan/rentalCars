import {
  postClientLoginDetails,
  postClientRegisterDetails,
} from "../../helper/axios-helper";
import { toast } from "react-toastify";

export const userLoginAction = (obj) => async (dispatch) => {
  const response = await postClientLoginDetails(obj);

  const { status, message, user } = response;

  if (status === "success") {
    toast.success(message);
    localStorage.setItem("user", JSON.stringify(user));
    setTimeout(() => {
      window.location.href = "/";
    });
  } else {
    toast.error(message);
    return;
  }
};

export const userRegisterAction = (obj) => async (dispatch) => {
  const { confirmPassword, ...rest } = obj;
  const { status, message } = await postClientRegisterDetails(rest);
  toast.success("Registration success");
  setTimeout(() => {
    window.location.href = "/login";
  }, 200);
};
