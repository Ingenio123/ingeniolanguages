import { isAuth } from "../../helpers/Auth";
import { getIdiom } from "../../services/idioms";
export const GetIdiomAction = (idiom) => async (dispatch) => {
  if (isAuth()) {
    const { datos } = await getIdiom(idiom);
    return dispatch({
      type: "GET_IDIOM_REDUCER",
      payload: {
        datos,
        idiom,
      },
    });
  }
};
