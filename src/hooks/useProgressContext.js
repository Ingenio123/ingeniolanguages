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
    Show,
    setShow,
    setDataScores,
    AddScoreRuletaSimple,
  } = contextProgress;

  const ScoreAdd = (score) => {
    console.log("AddScore");
    if (score >= 16 && score < 34) {
      AddLevel(1);
    }
    if (score >= 33 && score <= 50) {
      AddLevel(2);
    }
    if (score >= 49) {
      AddLevel(3);
    }
    if (score >= 66) {
      AddLevel(4);
    }
    if (score >= 83) {
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
    let baseScore = 5.55;
    let flag = 0;
    let valScoreRuleta = 0;
    //a1
    if (initScore > 0 && initScore <= 16.65) {
      flag = 1;
      AddLevel(0);
      AddLevel(flag - 1);
      let rest = initScore;
      let res = rest / 5.55;

      AddSubLevel(res - 1);
      AddScoreRuletaSimple(res * 33);
    }
    //A2
    if (initScore >= 22.2 && initScore <= 33.3) {
      flag = 2;
      AddLevel(flag - 1);
      let rest = initScore;

      let res = rest / 5.55 - 3;

      AddSubLevel(res - 1);
      AddScoreRuletaSimple(res * 33);
    }
    // B1
    if (initScore >= baseScore * 7 && initScore <= baseScore * 9) {
      flag = 3;
      AddLevel(flag - 1);
      let rest = initScore;

      let res = rest / 5.55 - 6;

      AddSubLevel(res - 1);
      AddScoreRuletaSimple(res * 33);
    }
    //b2
    if (initScore >= baseScore * 10 && initScore <= baseScore * 12) {
      flag = 4;
      AddLevel(flag - 1);
      let rest = initScore;

      let res = rest / 5.55 - 9;

      AddSubLevel(res - 1);
      AddScoreRuletaSimple(res * 33);
    }
    //c1
    if (initScore >= baseScore * 13 && initScore <= baseScore * 15) {
      flag = 5;
      AddLevel(flag - 1);
      let rest = initScore;

      let res = rest / 5.55 - 12;

      AddSubLevel(res.toFixed() - 1);
      AddScoreRuletaSimple(res * 33);
    }
    //c2
    if (initScore >= baseScore * 16 && initScore <= baseScore * 18) {
      flag = 6;
      AddLevel(flag - 1);
      let rest = initScore;

      let res = rest / 5.55 - 15;

      AddSubLevel(res - 1);
      AddScoreRuletaSimple(res * 33);
    }
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
  const StartShow = () => {
    setShow(true);
  };

  const SetScore = (param) => {
    setDataScores({ data: param });
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
    StartShow,
    Show,
    SetScore,
    AddScoreRuletaSimple,
  };
};

export default UseProgressContext;
