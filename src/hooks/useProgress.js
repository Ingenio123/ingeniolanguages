import { useState } from "react";
import { url } from "../components/Urls";
import axios from "axios";
const useProgressScore = () => {
  //states
  const [stateData, setStateData] = useState({
    valor: null,
  });
  const [ScoreValue, setScoreValue] = useState(0.0);
  const [levelSup, setLevelSup] = useState("");
  const [Show, setShow] = useState(false);
  const [Course, setCourse] = useState({});
  const [ValorSup, setValorSup] = useState(0);
  const [status, setStatus] = useState({
    loading: false,
    error: false,
    success: false,
  });
  //
  const GetCourse = (datos) => {
    setStateData({ valor: datos });
  };
  const ResetSelect = () => {
    setStateData({ valor: null });
  };
  //
  const AddScore = async (val, objc) => {
    console.log(objc);
    const { email } = objc;
    const { kids, idiom } = Course;

    setScoreValue((plus) => plus + val);
    const { token } = JSON.parse(localStorage.getItem("user"));

    const body = { score: ScoreValue, kids, idiom, email };
    setStatus({ loading: true, error: false });
    const resp = await fetch(`${url}/teacher/summary/score`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    console.log(resp);
    if (resp.status >= 400 && resp.status <= 500) {
      return setStatus({ loading: false, error: true });
    }
    setStatus({ loading: false, error: false, success: true });
  };

  const AddCourse = (course) => {
    setCourse(course);
  };
  const ResetScore = () => {
    setScoreValue(0.0);
  };
  const initialScore = (course) => {
    const { score } = course;
    setScoreValue(score);
    setCourse(course);
    if (score < 100) {
      setLevelSup("A1");
    }
    if (score > 100 && course.score < 200) {
      setLevelSup("A2");
    }
    if (score > 200 && course.score < 300) {
      setLevelSup("A3");
    }
    if (score > 200 && course.score < 300) {
      setLevelSup("A3");
    }
  };
  function StartShow() {
    setShow(true);
  }
  function NotShow() {
    setShow(false);
  }
  function ResetStatus() {
    setStatus({
      loading: false,
      error: false,
      success: false,
    });
  }

  return {
    stateData,
    GetCourse,
    ResetSelect,
    AddScore,
    ScoreValue,
    ResetScore,
    initialScore,
    levelSup,
    Show,
    StartShow,
    NotShow,
    AddCourse,
    status,
    ResetStatus,
    ValorSup,
    setValorSup,
    Course,
  };
};
export default useProgressScore;
