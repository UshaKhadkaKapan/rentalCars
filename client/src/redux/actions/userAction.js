import { toast } from "react-toastify";
import {
  postClientLoginDetails,
  postClientRegisterDetails,
} from "../../helper/axios-helper";

import { setUserRegister } from "../sliceReducer/userSlice";

export const userLoginAction = (obj) => async (dispatch) => {
  const resultPromise = postClientLoginDetails(obj);
  toast.promise(resultPromise, { pending: "Please wait..." });
  console.log(resultPromise);

  const { status, message, result } = await resultPromise;
  toast[status](message);
  setTimeout(() => {
    window.location.href = "/";
  }, 200);
  console.log(result);

  if (status === "success") {
    dispatch(setUserRegister(result));
    // localStorage.setItem("user", JSON.stringify(username));
  }
};

export const userRegisterAction = (obj) => async (dispatch) => {
  const { confirmPassword, ...rest } = obj;
  const { status, message } = await postClientRegisterDetails(rest);
  toast[status](message);
  setTimeout(() => {
    window.location.href = "/login";
  }, 200);
};
