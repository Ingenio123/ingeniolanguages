import ProgressContext from "../context/ProgressContext";
import { useContext } from "react";
import { url } from "../components/Urls";

const UseProgressContext = () => {
  const contextProgress = useContext(ProgressContext);
  const {
    AddScore,
    defaultScore,
    AddLevel,
    score,
    level,
    AddScoreRuleta,
    scoreRuleta,
    sublevel,
    AddSubLevel,
    Status,
    setStatus,
  } = contextProgress;

  const ScoreAdd = (score) => {
    console.log("AddScore");
    if (score >= 16 && score < 34) {
      AddLevel(1);
    }
    if (score >= 33 && score < 50) {
      AddLevel(2);
    }
    if (score >= 49) {
      AddLevel(3);
    }
    if (score >= 66) {
      AddLevel(4);
    }
    if (score > 83) {
      AddLevel(5);
    }
    if (score >= 99) {
      AddLevel(6);
    }
  };

  //score => number / obeject = datos del student selecionado / course => {kids: boolean , idiom: string }

  const SendDataServerScore = async (score, objec, course) => {
    const { email } = objec;
    const { kids, idiom } = course;

    const { token } = JSON.parse(localStorage.getItem("user"));

    const body = { score: score, kids, idiom, email };
    // setStatus({ loading: true, error: false });
    const resp = await fetch(`${url}/teacher/summary/score`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    console.log(resp);
    if (resp.status === 200) {
      AddScore(5.55);
      AddScoreRuleta(33);
      setStatus({
        loading: false,
        error: false,
        success: true,
      });
    }
    if (resp.status === 400) {
      setStatus({
        loading: false,
        error: true,
        success: false,
        message: "Error Idiom not select",
      });
    }
  };

  const DefaultScore = (initScore) => {
    console.log("Default score");
    defaultScore(initScore);
  };

  const addLevel = (val) => {
    AddLevel(val);
  };

  const ResetStatusContext = () => {
    setStatus({
      loading: false,
      error: false,
      success: false,
    });
  };
  return {
    score,
    addScore: ScoreAdd,
    DefaultScore,
    addLevel,
    level,
    scoreRuleta,
    sublevel,
    sendScore: SendDataServerScore,
    Status,
    ResetStatusContext,
  };
};

export default UseProgressContext;
