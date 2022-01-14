import cookie from "js-cookie";

export const setCookie = (key, value) => {
  if (window !== "undefined") {
    cookie.set(key, value, {
      expires: 1,
    });
  }
};

export const removeCookie = (key) => {
  if (window !== "undefined") {
    cookie.remove(key, {
      // expires 1 day
      expires: 1,
    });
  }
};

export const getCookie = (key) => {
  if (window !== "undefined") {
    return cookie.get(key);
  }
};

// set in localStorage
export const setLocalStorage = (key, value) => {
  if (window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
// remove from localStorage
export const removeLocalStorage = (key) => {
  if (window !== "undefined") {
    localStorage.removeItem(key);
  }
};

// getLocalStorage
// esto no vale
export const GetLocalStorage = () => {
  if (window !== "undefined") {
    const datos = JSON.parse(localStorage.getItem("user"));
    return datos;
    // if (localStorage.getItem("user")) {
    //   console.log(JSON.parse(localStorage.getItem("user")));
    // }
  }
};

// verify refresh token
export const VerifyRefreshToken = () => {
  if (window !== "undefined") {
    const { refreshToken } = JSON.parse(window.localStorage.getItem("user"));
    if (!refreshToken) {
      return false;
    }
    return true;
  }
};

// Auth enticate user by passing data to cookie and localstorage during signin
export const authenticate = (response, next) => {
  console.log("AUTHENTICATE HELPER ON SIGNIN RESPONSE", response);
  setCookie("token", response.data.user.token);
  setLocalStorage("user", response.data.user);
  next();
};

// Access user info from localstorage
export const isAuth = () => {
  if (window !== "undefined") {
    // const cookieChecked = getCookie("token");
    // console.log(cookieChecked);
    if (localStorage.getItem("user")) {
      // console.log(JSON.parse(localStorage.getItem("user")));
      return JSON.parse(localStorage.getItem("user"));
    } else {
      return false;
    }
    // if (cookieChecked) {
    // }
  }
};

export const signout = (next) => {
  removeCookie("token");
  removeLocalStorage("user");
  next();
};

export const updateUser = (response, next) => {
  console.log("UPDATE USER IN LOCALSTORAGE HELPERS", response);
  if (typeof window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("user"));
    auth = response.data;
    localStorage.setItem("user", JSON.stringify(auth));
  }
  next();
};

export const updateToken = (newtoken) => {
  console.log("UPDATE TOKEN", newtoken);
  if (typeof window !== "undefined") {
    let auth = JSON.parse(localStorage.getItem("user"));
    auth = {
      email: auth.email,
      picture: auth.picture,
      rol: auth.rol,
      _id: auth._id,
      token: newtoken,
    };
    localStorage.setItem("user", JSON.stringify(auth));
  }
};
