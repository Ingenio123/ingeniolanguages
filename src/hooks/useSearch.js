import React, { useState, useCallback, useContext } from "react";
import context from "../components/Context/CoursesContext";
import { url } from "../components/Urls";
const useSearch = () => {
  //context
  const {
    StateSelect,
    setStateSelect,
    data,
    setData,
    firstData,
    setFirstData,
    Status,
    setStatus,
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

  const handleSubmit = async ({ values, DateCalendar }) => {
    const { summary, comments } = values;
    console.log(summary, comments, DateCalendar);
    const { token } = JSON.parse(localStorage.getItem("user"));
    if (Object.keys(data).length === 0) {
      const kids = firstData.courses[0].kids;
      const idiom = firstData.courses[0].idiom;
      const email = firstData.email;
      console.log(kids, idiom);
      const body = {
        SummaryInput: summary,
        Comments: comments,
        idiom: idiom,
        email: email,
        date: DateCalendar,
        kids: kids,
      };
      setStatus({
        loading: true,
        error: false,
        succes: false,
      });
      const resp = await fetch(`${url}/teacher/summary`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
      if (resp.status === 200) {
        return setStatus({
          loading: false,
          error: false,
          succes: true,
        });
      }
    }
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
    handleSubmit,
    Status,
  };
};

export default useSearch;
