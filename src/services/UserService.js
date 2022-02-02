import axios from "axios";
import Url from "../components/Urls";
import {
  GetLocalStorage,
  VerifyRefreshToken,
  updateToken,
} from "../helpers/Auth";
import { RefreshToken } from "./refreshtoken.service";
export const GetDataUserDemoClass = async (token) => {
  try {
    const res = await fetch(`${Url.url}/getdataDemoclass`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    if (res.status >= 400) {
      if (VerifyRefreshToken) {
        const user = JSON.parse(window.localStorage.getItem("user"));
        const newtoken = await RefreshToken(user.refreshToken);
        console.log("RESPONSE DEL SERVER:", newtoken);
        updateToken(newtoken.token);
      }
    }
    const data = await res.json();
    // const { addData, democlass } = data;
    // const { FirstName, email } = data.data;
    // return { addData, democlass, FirstName, email };
    return data;
  } catch (error) {
    return false;
  }
};

export const LoginUser = async ({ email, password }) => {
  const data = {
    email,
    password,
  };
  const EndPoint = Url.url + "/data/userSignIn";

  const Body = JSON.stringify({ email, password });
  // try {
  //   const res = await axios.post(EndPoint, data);
  //   console.log("Res", res);
  //   return res;
  // } catch (error) {
  //   return error;
  // }
  // axios
  //   .post(EndPoint, data)
  //   .then((res) => {
  //     // console.log(res);
  //     return res;
  //   })
  //   .catch((error) => {
  //     return error;
  //   });
  try {
    const res = await fetch(EndPoint, {
      method: "POST",
      body: Body,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
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
  try {
    const res = await fetch(Enpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    // const res = await axios.post(Enpoint, body, config);
    // console.log(res);
    if (res.status >= 400) {
      const data = await res.json();
      return {
        success: data.succes,
        message: data.message,
      };
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const GetCourseStudent = async ({ token }) => {
  try {
    const Enpoint = Url.url + "/data/verifyIstudent";
    const res = await fetch(Enpoint, {
      headers: {
        authorization: `Bearer: ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("hay un error", error.status);
    return false;
  }
};

export const SendDataDemoClass = async ({ Gender, Phone, Country, Token }) => {
  try {
    const Body = {
      Gender,
      Phone,
      Country,
    };

    const res = await fetch(`${Url.url}/addDataDemo`, {
      method: "POST",
      body: JSON.stringify(Body),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${Token}`,
      },
    }).catch((err) => {
      console.log("Error", err.response.data);
    });
    return res;
  } catch (error) {
    console.log("Error", error);
  }
};

export const SendDataDemoClassOne = async ({ SecondEmail, Token }) => {
  const Body = {
    SecondEmail,
  };
  // =================== Fetch ====================== //
  // fetch(`${Url.url}/addDataDemoOne`, {
  //   method: "POST",
  //   body: JSON.stringify(Body),
  //   headers: {
  //     "Content-Type": "application/json",
  //     authorization: `Bearer ${Token}`,
  //   },
  // })
  //   .then((res) => {
  //     // --------------> STATUS 400 ERR  -------------------- //
  //     if (res.status >= 400 || res.status < 500) {
  //       console.log(res);
  //       console.log("Error ", res.status);
  //       res.json().then((data) => {
  //         return data;
  //       });
  //       return;
  //     }
  //     // --------------> STATUS 500 ERR  -------------------- //
  //     if (res.status >= 500) {
  //       console.log("Error Server: ", res.status);
  //       res.json().then((data) => {
  //         return data;
  //       });
  //     }
  //     // ---------------> STATUS 200 SUCCESS -----------------//
  //     res.json().then((data) => {
  //       console.log(data);
  //       return data;
  //     });
  //   })
  //   // ---------------------> Catch <---------------------- //
  //   .catch((err) => {
  //     console.log("Error", err);
  //   });

  const res = await fetch(`${Url.url}/addDataDemoOne`, {
    method: "POST",
    body: JSON.stringify(Body),
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${Token}`,
    },
  }).catch((err) => {
    console.log(err.response.data);
  });
  return res;
};

export const UpdateImageProfile = async ({ formData, id }) => {
  const Endpoint = `${Url.url}/data/user/updateImage/${id}`;
  try {
    const res = await fetch(Endpoint, {
      method: "POST",
      body: formData,
    });
    if (res.status === 400) {
      var error = await res.json();
      return error;
    }
    const data = await res.json();
    return data;
  } catch (_err) {
    console.log("########### ERROR " + _err);
  }
};
