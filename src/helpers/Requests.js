import axios from "axios";

import Url from "../components/Urls";
export const getData = async (id) => {
  await axios.get(`${Url.url}/data/teacher/${id}`);
};

export const SignUpUser = async (data, country, phone) => {
  const EndPoint = Url.url + "/data/userSignUp";
  const {
    FirstName,
    LastName,
    Gender,
    password,
    your_lenguage,
    email,
    confirmPassword,
    age,
  } = data;
  // Request body
  const body = JSON.stringify({
    FirstName,
    LastName,
    Gender,
    password,
    your_lenguage,
    email,
    confirmPassword,
    age,
    country,
    phone,
  });
  console.log(body);
  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await axios.post(EndPoint, body, config);
  if (!res) {
    return false;
  }

  AddUser(res);
  return true;
};

const AddUser = (res) => {
  setLocalStorage("user", res.data.user);
};
const setLocalStorage = (key, value) => {
  if (window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
export const IsAuth = () => {
  if (window !== "undefined") {
    const data = window.localStorage.getItem("user");

    if (data) {
      const user = JSON.parse(data);
      return user;
    }
    return false;
  }
};
export const VerifyIfTokenIsValid = async () => {
  if (window !== "undefined") {
    if (IsAuth()) {
      return IsAuth().token;
    }
    return false;
  }
};
