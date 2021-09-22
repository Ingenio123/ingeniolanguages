import axios from "axios";
import Url from "../components/Urls";

export const LoginUser = async ({ email, password }) => {
  const data = {
    email,
    password,
  };
  const EndPoint = Url.url + "/data/userSignIn";

  // const Body = JSON.stringify({ email, password });
  const res = await axios.post(EndPoint, data);
  return res;
};

export const VerfyUser = async ({ id }) => {
  console.log(id);
  const Enpoint = Url.url + "/data/";
};
//sign up user

export const SignUpUser = async ({ data, country, cellphone }) => {
  // return { data, country, cellphone };
  const Enpoint = Url.url + "/data/userSignUp";

  const phone = cellphone;
  const { FirstName, email, Gender, LastName, password, confirmPassword, age } =
    data;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    FirstName,
    LastName,
    Gender,
    password,
    email,
    confirmPassword,
    age,
    country,
    phone,
  });

  const res = await axios.post(Enpoint, body, config);
  if (!res) return false;

  return res;
};
