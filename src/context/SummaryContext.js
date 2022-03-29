import { createContext, useReducer } from "react";
import reducer from "../redux/reducers/sumary.reducer";
import { GET_ONE_SUMMARY_SERVICES } from "../services/GetOneSummary.services";
//
const initialState = {
  AllSummary: [],
  loading: false,
  SearchForId: (idiom, kids) => {},
  data: [],
};

const Context = createContext(initialState);

export const SummaryProgress = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //
  function SearchForId(idiom, kids) {
    // console.log("Search" + id);
    console.log(state.AllSummary);
    const ArrayOfData = state.AllSummary.filter(
      (i) => i.course === idiom && i.kids === kids
    );
    console.log(ArrayOfData);
    dispatch({
      type: "DATA",
      payload: ArrayOfData,
    });
  }
  //
  async function GetSummary() {
    dispatch({
      type: "LOADING_SERVER",
      payload: true,
    });
    const response = await GET_ONE_SUMMARY_SERVICES();
    dispatch({
      type: "DATA_SERVER",
      payload: response.data,
    });
    dispatch({
      type: "LOADING_SERVER",
      payload: false,
    });
  }
  return (
    <Context.Provider
      value={{
        AllSummary: state.AllSummary,
        GetSummary,
        SearchForId,
        loading: state.loading,
        data: state.data,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
