import axios from "axios";
const baseURL = "https://manager-backend-981i.onrender.com";
import { tokenStorageKey } from "../utils/constants";
const jwt = localStorage.getItem(tokenStorageKey);
let axiosConfig = {
    headers: {
        'Authorization': jwt,
    }
  };


export const registerUser = async ({ name, email, password }) => {
  try {
    
    const reqUrl = `${baseURL}/register`;
    const reqPayload = { name, email, password };
    const response = await axios.post(reqUrl, reqPayload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const reqUrl = `${baseURL}/login`;
    const reqPayload = { email, password };
    const response = await axios.post(reqUrl, reqPayload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateName = async ({ name }) => {
  try {
    const reqUrl = `${baseURL}/update/name/`;
    const reqPayload = { name };
    console.log(reqPayload);
    const response = await axios.patch(reqUrl, reqPayload,axiosConfig);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePassword = async ({ oldPassword,newPassword }) => {
  try {
    const reqUrl = `${baseURL}/update/password/`;
    const reqPayload = { oldPassword,newPassword };
    const response = await axios.patch(reqUrl, reqPayload,axiosConfig);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};