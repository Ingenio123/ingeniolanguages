import { isAuth } from "../../helpers/Auth";
import { getCourses } from "../../services/idioms";
export const GetCourses = () => async (dispatch) => {
  const { token } = JSON.parse(window.localStorage.getItem("user"));

  if (isAuth()) {
    const { data } = await getCourses(token);
    const idioms = data.map((i) => {
      return i.idiom;
    });

    return dispatch({
      type: "MENU_IDIOM",
      payload: {
        courses: idioms,
      },
    });
  }
};
