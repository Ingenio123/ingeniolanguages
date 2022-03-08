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
    setDataScores
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
    let baseScore =  16.6; 
    let flag = 0;
    let baseRuleta = 33.33;
    if(initScore >= 0 && initScore < 33.25 ){
      flag = 1;
      AddLevel(0)
      for(var i = 0; i < 3; i++ ){
        var rest = initScore - 5.55;
        var res =  rest / flag;
        if(res === 16.66){
          AddSubLevel(i);
          break;
        }
      }
    }
    if(initScore >=  33.25  && initScore < 49.9 ){
      flag = 2;
      AddLevel(flag - 1)
      for(var i = 0; i < 3; i++ ){
        var rest = initScore - 5.55;
        var res =  rest / flag;
        if(res === 16.66){
          AddSubLevel(i);
          break;
        }
      }
    }
    // B1 
    if(initScore >=  (baseScore * 3)   && initScore < (baseScore * 4) ){
      flag = 3;
      AddLevel(flag - 1)
      for(var i = 0; i < 3; i++ ){
        var rest = initScore - 5.55;
        var res =  rest / flag;
        if(res === 16.66){
          AddSubLevel(i);
          break;
        }
      }
    }
    if(initScore >=  (baseScore * 4)   && initScore < (baseScore * 5) ){
      flag = 4;
      AddLevel(flag - 1)
      for(var i = 0; i < 3; i++ ){
        var rest = initScore - 5.55;
        var res =  rest / flag;
        if(res === 16.66){
          AddSubLevel(i);
          break;
        }
      }
    }
    if(initScore >=  (baseScore * 5)   && initScore < (baseScore * 6) ){
      flag = 5;
      AddLevel(flag - 1)
      for(var i = 0; i < 3; i++ ){
        var rest = initScore - 5.55;
        var res =  rest / flag;
        if(res === 16.66){
          AddSubLevel(i);
          break;
        }
      }
    }
    if(initScore >=  (baseScore * 6)   && initScore < (baseScore * 7) ){
      flag = 6;
      console.log("C1")
      AddLevel(flag - 1)
      var val =  initScore
      for(var i= 1; i <= 3; i++ ){
        console.log(i)
        val -=  5.55;
        console.log(val)
        var res =  val / flag;
        console.log(res)
        if(res === 16.6){
          console.log("Estoy Aqui")
          AddSubLevel(i);
          AddScoreRuleta(baseRuleta * i)
          break;
        }
      }
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
    setDataScores({data:param})
  }
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
    SetScore
  };
};

export default UseProgressContext;
