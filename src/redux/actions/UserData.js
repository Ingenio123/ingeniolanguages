import { GetDataUserDemoClass } from "../../services/UserService";

export const GetDataUser = () => async (dispatch) => {
  if (window.localStorage.getItem("user")) {
    const token = JSON.parse(window.localStorage.getItem("user"));
    dispatch({ type: "LOADING_USER_DEMO_CLASS" });
    GetDataUserDemoClass(token.token)
      .then((res) => {
        dispatch({
          type: "DATA_USER_DEMO_CLASS",
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({ type: "ERROR_USER_DEMO_CLASS" });
      });
  }
};
