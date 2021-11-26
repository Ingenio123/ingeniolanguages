import { useReducer } from "react";
import IdiomReducer from "../redux/reducers/idiomReducer";
import NavbarContext from "../context/NavbarContext";
import { getIdiom as get } from "../services/idioms";

const NavBarState = (props) => {
  const initalState = {
    idiom: null,
  };
  const [state, dispatch] = useReducer(IdiomReducer, initalState);

  //
  const getIdiom = async (idiom) => {
    try {
      const res = await get(idiom);
      if (res.success) {
        return dispatch({
          type: "GET_IDIOM",
          payload: res,
        });
      }
      return dispatch({
        type: "ERROR_IDIOM",
      });
    } catch (_err) {
      console.log(_err);
      return;
    }
  };

  return (
    <NavbarContext.Provider
      value={{
        idiom: state.idiom,
        getIdiom,
      }}
    >
      {props.children}
    </NavbarContext.Provider>
  );
};

export default NavBarState;
