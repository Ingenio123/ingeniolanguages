import Url from "../components/Urls";
import { useState, useEffect, useReducer, useCallback } from "react";
const initialState = {
  isEmppty: false,
  loading: false,
  error: false,
  data: [],
  dataNormal: [],
  dataKids: [],
  dataSelect: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "IT_IS_EMPTY":
      return {
        ...state,
        idiom: action.payload,
        empty: true,
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "GET_DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "DATA_NORMAL":
      return {
        ...state,
        dataNormal: action.payload,
      };
    case "DATA_KIDS":
      return {
        ...state,
        dataKids: action.payload,
      };
    case "DATA_SELECT":
      return {
        ...state,
        dataSelect: action.payload,
      };
    default:
      return state;
  }
};
export const useCardFeedback = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const getSummary = useCallback(async (id) => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    dispatch({
      type: "LOADING",
      payload: true,
    });
    const res = await fetch(
      `${Url.url}/feedback/teacher/summary/getSummary/${id}`,
      {
        method: "GET",
        headers: {
          "Content-type": "Application/json",
          Authorization: `Beare ${user.token}`,
        },
      }
    );
    if (res.status > 200) {
      return {
        error: true,
        success: true,
      };
    }
    const data = await res.json();
    dispatch({
      type: "GET_DATA",
      payload: data.feedBack,
    });
    //
    const dataNormal = data.feedBack.filter((e) => e.kids === false);
    const datakids = data.feedBack.filter((e) => e.kids === true);
    //
    dispatch({
      type: "DATA_NORMAL",
      payload: dataNormal,
    });
    dispatch({
      type: "DATA_KIDS",
      payload: datakids,
    });
    dispatch({
      type: "LOADING",
      payload: false,
    });
  }, []);

  const getSummaryForPackage = (idiom, kids) => {
    let datos = [];
    if (kids) {
      console.log(state.dataKids);
      datos = state.dataKids.filter(
        (e) => e.kids === kids && e.id_Course.nameCourse === idiom
      );
      return dispatch({ type: "DATA_SELECT", payload: datos });
    }
    datos = state.dataNormal.filter(
      (e) => e.kids === kids && e.id_Course.nameCourse === idiom
    );
    return dispatch({ type: "DATA_SELECT", payload: datos });
  };

  const deleteFeedbak = (id) => {
    let datos = state.dataSelect.filter((e) => e._id !== id);
    return dispatch({ type: "DATA_SELECT", payload: datos });
  };
  const ResetSelectFeedback = () => {
    return dispatch({ type: "DATA_SELECT", payload: [] });
  };

  return {
    AllData: state,
    normal: state.dataNormal,
    dataKids: state.dataKids,
    loading: state.loading,
    ItIsEmpty: state.isEmppty,
    DataSelect: state.dataSelect,
    // methods
    getSummary,
    getSummaryForPackage,
    deleteFeedbak,
    ResetSelectFeedback,
  };
};
