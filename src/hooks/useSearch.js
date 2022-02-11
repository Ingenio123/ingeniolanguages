import React, { useState, useCallback, useContext } from "react";
import context from "../components/Context/CoursesContext";
const useSearch = () => {
  //context
  const {
    StateSelect,
    setStateSelect,
    data,
    setData,
    firstData,
    setFirstData,
  } = useContext(context);
  //state

  //
  function reset() {
    return setData({});
  }

  const getData = useCallback((val) => {
    setData(val);
  }, []);

  const FirstDataGet = useCallback((val) => {
    setFirstData(val);
  }, []);

  const SlectIdiomCallback = useCallback((idiom) => {
    setStateSelect({ idiom });
  }, []);

  const ResetSelect = () => {
    setStateSelect({ idiom: null });
  };

  return {
    data,
    reset,
    getData,
    FirstDataGet,
    firstData,
    SlectIdiomCallback,
    StateSelect,
    ResetSelect,
  };
};

export default useSearch;
