import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1";
const cDEP = rootUrl + "/rentalcarrouter";
const registerEP = rootUrl + "/register";
const loginEP = registerEP + "/login";

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
