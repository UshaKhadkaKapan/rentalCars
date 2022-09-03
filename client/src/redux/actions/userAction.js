import {
  postClientLoginDetails,
  postClientRegisterDetails,
} from "../../helper/axios-helper";
import { message } from "antd";
import { toast } from "react-toastify";

import { setUserRegister } from "../sliceReducer/userSlice";

export const userLoginAction = (obj) => async (dispatch) => {
  const response = await postClientLoginDetails(obj);
  // if (response.status === "error") {
  //   toast.error("Usha");
  //   return;
  // }

  // localStorage.setItem("user", JSON.stringify(response.user));
  // toast.success("Login success");
  // setTimeout(() => {
  //   window.location.href = "/";
  // }, 200);

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
  message.success("Registration success");
  setTimeout(() => {
    window.location.href = "/login";
  }, 200);
};
