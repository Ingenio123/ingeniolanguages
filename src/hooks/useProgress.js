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

    const valores = { score: ScoreValue, kids, idiom, email };
    const data = await axios.post(`${url}/teacher/summary/score`, valores, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
  };
  const AddCourse = (course) => {
    setCourse(course);
  };
  const ResetScore = () => {
    setScoreValue(0.0);
  };
  const initialScore = (score) => {
    setScoreValue(score);
    if (score < 100) {
      setLevelSup("A1");
    }
    if (score > 100 && score < 200) {
      setLevelSup("A2");
    }
    if (score > 200 && score < 300) {
      setLevelSup("A3");
    }
  };
  function StartShow() {
    setShow(true);
  }

  function NotShow() {
    setShow(false);
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
  };
};
export default useProgressScore;
