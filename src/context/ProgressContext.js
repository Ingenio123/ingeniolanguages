import { createContext, useState, useReducer } from "react";
import reduxer from "../redux/reducers/progressReducer";

const initialState = {
  loading: undefined,
  error: false,
  success: false,
  score: 0,
  scoreRuleta: 0,
  level: "A1",
  sublevel: "",
};

const Context = createContext(initialState);

export const ProgressContext = ({ children }) => {
  const [state, dispatch] = useReducer(reduxer, initialState);
  const [Status, setStatus] = useState({
    loading: false,
    error: false,
    success: false,
  });
  const [ObjecIdiom, setObjecIdiom] = useState({
    idiom: null,
    kids: null,
  });
  const [AddStudent, setAddStudent] = useState({ _id: null });
  const [Show, setShow] = useState(false);
  const [DataScores, setDataScores] = useState({ data: null });

  /**
   * Es como tener un  componente  de react
   */
  async function AddScore(valor) {
    const { score } = state;
    const valtotal = score + valor;
    //reducer context
    dispatch({
      type: "ADD_SCORE",
      payload: valtotal,
    });
  }

  function defaultScore(initScore) {
    return dispatch({
      type: "DEFAULT_SCORE",
      payload: initScore,
    });
  }

  function AddLevel(val) {
    const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
    //  val ===>     0     1     2     3     4     5
    dispatch({
      type: "ADD_LEVEL",
      payload: levels[val],
    });
  }

  function AddSubLevel(val) {
    const levels = [".1", ".2", ".3"];
    dispatch({
      type: "ADD_SUBLEVEL",
      payload: levels[val],
    });
  }
  function AddScoreRuletaSimple(total) {
    // function AddScoreRuletaSimple(val) {
    // let { scoreRuleta } = state;
    // const total = scoreRuleta + val;
    dispatch({
      type: "ADD_SCORE_RULETA",
      payload: total,
    });
  }

  function AddScoreRuleta(val) {
    const { scoreRuleta } = state;
    if (scoreRuleta >= 0) {
      AddSubLevel(0);
    }
    if (scoreRuleta >= 33) {
      AddSubLevel(1);
    }
    if (scoreRuleta >= 66) {
      AddSubLevel(2);
    }

    if (scoreRuleta >= 99) {
      AddSubLevel(0);
      return dispatch({
        type: "RESET_SCORE",
        payload: 33,
      });
    }
    const total = scoreRuleta + val;
    dispatch({
      type: "ADD_SCORE_RULETA",
      payload: total,
    });
  }

  function ResetScore() {
    dispatch({
      type: "RESET_SCORE",
      payload: 0,
    });
  }

  return (
    <Context.Provider
      value={{
        score: state.score,
        level: state.level,
        scoreRuleta: state.scoreRuleta,
        sublevel: state.sublevel,
        AddScore,
        defaultScore,
        AddLevel,
        AddScoreRuleta,
        ResetScore,
        AddSubLevel,
        Status,
        setStatus,
        ObjecIdiom,
        setObjecIdiom,
        setAddStudent,
        AddStudent,
        Show,
        setShow,
        DataScores,
        setDataScores,
        AddScoreRuletaSimple,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default Context;
