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
  const { token } = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = async ({ values, DateCalendar }) => {
    const { summary, comments } = values;
    if (Object.keys(data).length === 0) {
      const kids = firstData.courses[0].kids;
      const idiom = firstData.courses[0].idiom;
      const email = firstData.email;
      const time = firstData.courses[0]?.time;
      const body = {
        SummaryInput: summary,
        Comments: comments,
        idiom: idiom,
        email: email,
        date: DateCalendar,
        kids: kids,
        time,
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
      console.log(resp);
      if (resp.status === 400) {
        return setStatus({
          loading: false,
          error: true,
          succes: false,
        });
      }
      if (resp.status === 200) {
        return setStatus({
          loading: false,
          error: false,
          succes: true,
        });
      }
    }
    const kistwo = data.kids;
    const idiomtwo = data.idiom;
    const email = firstData.email;

    const bodydata = {
      SummaryInput: summary,
      Comments: comments,
      idiom: idiomtwo,
      email: email,
      date: DateCalendar,
      kids: kistwo,
      time: data.time,
    };
    setStatus({
      loading: true,
      error: false,
      succes: false,
    });
    const response = await fetch(`${url}/teacher/summary`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bodydata),
    });
    console.log(response);
    if (response.status === 400) {
      return setStatus({
        loading: false,
        error: true,
        succes: false,
      });
    }
    if (response.status === 200) {
      return setStatus({
        loading: false,
        error: false,
        succes: true,
      });
    }
  };

  const ResetStatus = () => {
    setStatus({
      loading: false,
      error: false,
      succes: false,
    });
  };

  const getDataStorage = (idiom, kids) => {
    if (kids) {
      return;
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
    ResetStatus,
    getDataStorage,
  };
};

export default useSearch;
