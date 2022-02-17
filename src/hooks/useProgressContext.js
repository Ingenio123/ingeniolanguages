import ProgressContext from "../context/ProgressContext";
import { useContext } from "react";
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
  } = contextProgress;

  const ScoreAdd = () => {
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
    AddScore(5.55);

    AddScoreRuleta(33);
  };

  const DefaultScore = (initScore) => {
    console.log("Default  score");
    defaultScore(initScore);
  };

  const addLevel = (val) => {
    AddLevel(val);
  };
  return {
    addScore: ScoreAdd,
    DefaultScore,
    addLevel,
    level,
    scoreRuleta,
    sublevel,
  };
};

export default UseProgressContext;
