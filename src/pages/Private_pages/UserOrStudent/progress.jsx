//librerias
import styled, { keyframes } from "styled-components";
// librerias
import axios from "axios";
// hooks
import { useContext, useState, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
//  end hooks
//components
import CardProgress from "../../../components/Progress_Lesson/CardsChart";
import CardFeedback from "../../../components/Progress_Lesson/CardFeedback";
import { CardProgresNew } from "../../../components/Progress_Lesson/CardProgress";
//end components
import ContextStudent from "../../../components/Context/StudentContext";
//data Json
import Data from "./dataprogress.json";
//end  data Json
import Url from "../../../components/Urls";

const initialState = {
  datos: null,
  kids: null,
  title: null,
  normal: null,
  default: null,
  loading: false,
  error: false,
  emptty: true,
  idiom: null,
  isStudent: false,
  empty: true,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "IT_IS_EMPTY":
      return {
        ...state,
        idiom: action.payload,
        empty: true,
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "LOADING_FALSE":
      return {
        ...state,
        loading: false,
      };
    case "GET_DATA_SERVER":
      return {
        ...state,
        datos: action.payload,
        loading: false,
        empty: false,
      };
    case "GET_DATA_KIDS":
      console.log("KIS data" + action.payload);
      return {
        ...state,
        titile: "(Kids)",
        kids: action.payload,
        default: action.payload,
        loading: false,
        empty: false,
      };
    case "GET_DATA_NORMAL":
      return {
        ...state,
        title: "",
        normal: action.payload,
        default: action.payload,
        loading: false,
        empty: false,
      };
    case "DATA_DEFAULT":
      const flag = action.payload[0].kids ? true : false;
      if (flag) {
        const kidsdata = state.datos.filter((elem) => elem.kids === true);
        return {
          ...state,
          kids: kidsdata,
          default: kidsdata,
          loading: false,
          empty: false,
        };
      }
      const normal = state.datos.filter((elem) => elem.kids === false);
      return {
        ...state,
        default: normal,
        normal: normal,
        loading: false,
        empty: false,
      };
    default:
      return state;
  }
};

function Progress() {
  const studentContext = useContext(ContextStudent);
  const [Idiom, setIdiom] = useState("");
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [Kids, setKids] = useState(null);
  const [DataScore, seDataScore] = useState([]);
  const { id } = useParams();
  const [Loading, setLoading] = useState(false);
  const [DataIdiom, setDataIdom] = useState({});

  useEffect(() => {
    async function GetData() {
      const user = JSON.parse(window.localStorage.getItem("user"));
      dispatch({
        type: "LOADING",
      });
      const resp = await axios.get(`${Url.url}/sudent/summary/getsummary`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      // console.log(resp.data);
      //
      if (resp.data.data.length > 0) {
        dispatch({
          type: "LOADING_FALSE",
        });
        dispatch({
          type: "GET_DATA_SERVER",
          payload: resp.data.data,
        });
        setIdiom(resp.data.data[0].course);
        resp.data.data[0].kids ? setKids(true) : setKids(false);
        return dispatch({
          type: "DATA_DEFAULT",
          payload: resp.data.data,
        });
      }
      //
      dispatch({
        type: "IT_IS_EMPTY",
      });
      return dispatch({
        type: "LOADING_FALSE",
      });
    }

    // GetData();
    if (studentContext.student) {
      console.log(studentContext.student.QueryStudent.courses);
      const data = studentContext.student.QueryStudent.courses.map((e) => {
        return {
          idiom: e.idiom,
          kids: e.kids,
          score: e.score,
        };
      });
      // console.log(data);
      seDataScore([...DataScore, data]);
      GetData(studentContext.student.QueryStudent.courses[0].idiom);
    }
    console.log(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentContext.student]);
  //#####################################################################
  //                         GET SCORE PROCESS
  //####################################################################
  const ClickSummary = async (kids, idiom) => {
    console.log("KIDS: " + kids + " IDIOM: " + idiom);
    setIdiom(idiom);

    if (state.datos) {
      if (kids) {
        setKids(true);
        const kidsdata = await state.datos.filter((elem) => elem.kids === true);
        console.log("Kis data" + kidsdata);
        return dispatch({
          type: "GET_DATA_KIDS",
          payload: kidsdata,
        });
      }
      setKids(false);
      const normal = await state.datos.filter((elem) => elem.kids === false);
      return dispatch({
        type: "GET_DATA_NORMAL",
        payload: normal,
      });
    }
    // state.datos
  };
  //####################################################################

  const Score = (score) => {
    let valores = 0;
    if (score === 0) {
      return {
        level: "A1",
        score: 0,
        scoreprint: 0,
      };
    }
    //
    if (score >= 5.55 && score <= 16.65) {
      valores = score / 5.55;
      return {
        level: "A1",
        score: score,
        scoreprint: valores,
      };
    }
    if (score >= 22.2 && score <= 33.3) {
      valores = score / 5.55 - 3;
      return {
        level: "A2",
        score: score,
        scoreprint: valores,
      };
    }
    if (score >= 38.85 && score <= 49.94) {
      valores = score / 5.55 - 6;
      let calc = valores * 33.33;
      return {
        level: "B1",
        score: calc.toFixed(),
        scoreprint: valores,
      };
    }
    if (score >= 55.5 && score <= 66.6) {
      valores = score / 5.55 - 9;
      return {
        level: "B2",
        score: score,
        scoreprint: valores,
      };
    }
    if (score >= 72.15 && score <= 83.25) {
      valores = score / 5.55 - 12;
      return {
        level: "C1",
        score: score,
        scoreprint: valores,
      };
    }
    if (score >= 88.8 && score <= 99.89) {
      valores = score / 5.55 - 15;
      return {
        level: "C2",
        score: score,
        scoreprint: valores,
      };
    }
  };

  useEffect(() => {
    console.log("Changue item menu");
    if (studentContext.student) {
      setLoading(true);
      // console.log("Student");
      // console.log(studentContext.student.QueryStudent.courses);
      const valor = studentContext.student.QueryStudent.courses.filter(
        (e) => e._id === id
      );
      // console.log(valor[0]);
      let valorScore = Score(valor[0].score);
      setDataIdom({
        ...DataIdiom,
        valorScore: valorScore,
        idiom: valor[0].idiom,
        kids: valor[0].kids,
      });
      // console.log(valorScore);
      return setLoading(false);
    }
    return setDataIdom({
      ...DataIdiom,
      valorScore: {
        level: "A1",
        score: 0,
        scoreprint: 0,
      },
      idiom: id,
      kids: false,
    });
  }, [id]);

  // useEffect(()=>{})

  return (
    <GridColumns>
      <ContentFlex>
        {studentContext.loading ? (
          <CardSkeleton>
            <div className="">
              <div className="skeleton title"></div>
              <div className="skeleton description"></div>
              <div className="skeleton button"></div>
            </div>
            <div className="skeleton cicle"></div>
          </CardSkeleton>
        ) : (
          <>
            {studentContext.student ? (
              <>
                {/* comment (1) */}
                {Loading ? (
                  "loading"
                ) : (
                  <CardProgressDetails>
                    <div className="card__header">
                      <div className="header__data">
                        <TextFeedbackFirst>
                          {DataIdiom.idiom} {DataIdiom.kids && " (Kids)"}
                        </TextFeedbackFirst>
                      </div>
                      {/* <button
                        onClick={() =>
                          ClickSummary(DataIdiom.kids, DataIdiom.idiom)
                        }
                        className="btn__summary"
                      >
                        Summary
                      </button> */}
                    </div>
                    <CardProgresNew
                      score={DataIdiom.valorScore?.score}
                      level={DataIdiom.valorScore?.level}
                      scoreprint={DataIdiom.valorScore?.scoreprint}
                    />
                  </CardProgressDetails>
                )}

                {/* end comment (1) */}
              </>
            ) : (
              <>
                {/* comments (2) */}
                <CardProgressDetails>
                  <div className="card__header">
                    <div className="header__data">
                      <TextFeedbackFirst className="language">
                        {DataIdiom.idiom} {DataIdiom.kids && " (Kids)"}
                      </TextFeedbackFirst>
                    </div>
                  </div>

                  <CardProgresNew
                    score={DataIdiom.valorScore?.score}
                    level={DataIdiom.valorScore?.level}
                    scoreprint={DataIdiom.valorScore?.scoreprint}
                  />
                </CardProgressDetails>
              </>
            )}
          </>
        )}
      </ContentFlex>
      <CardFeedback
        ItIsEmpty={state.empty}
        Summary={state.default}
        loading={state.loading}
        isStudent={studentContext.student ? true : false}
        idiom={Idiom}
        kids={Kids}
      />
    </GridColumns>
  );
}
export default Progress;
//###########################################################
const CardProgressDetails = styled.div`
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  /* border: 1px solid silver; */
  width: ${({ notStudent }) => (notStudent ? "300px" : "470px")};
  align-items: center;
  max-height: 300px;
  box-shadow: 1px 7px 6px -2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  .card__header {
    display: flex;
    justify-content: space-between;
    flex-direction: row !important;
    width: 100%;
    .header__data {
      .language {
        font-size: 1.525rem;
        font-weight: 600;
      }
    }
    .btn__summary {
      padding: 0 1rem;
      background: #dbeafe;
      border-radius: 4px;
      max-height: 48px;
      font-size: 1rem;
      color: #3b82f6;
      font-weight: 600;
      transition: all 0.5s ease;
      :hover {
        color: #2563eb;
        background-color: #bfdbfe;
      }
      :active {
        color: #1d4ed8;
        background-color: #93c5fd;
      }
    }
  }
  .card__content {
  }
  .card__footer {
    margin-top: 1rem;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    div {
      /* justify-self: center; */
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: row !important;
  align-items: center !important;
  justify-content: space-evenly;
  column-gap: 0.4rem;
  span {
    line-height: normal;
    font-size: 1rem;
  }
`;
const Cirlce = styled.span`
  border-radius: 50%;
  height: 10px;
  width: 10px;
  background-color: ${(props) => props.background};
`;

//#############################################################
const GridColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 20px 50px;
  max-width: 1280px;
`;
const ContentFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

/* CARD SKELETON */

const shimmer = keyframes`
    100% {
      transform: translateX(100%);
    }
  `;

const CardSkeleton = styled.div`
  height: 130px;
  width: 300px;
  position: relative;
  overflow: hidden;
  background-color: #dddbdd;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  .skeleton {
  }
  .title {
    position: relative;
    width: 100px;
    height: 30px;
    background: gray;
    margin-bottom: 0.8rem;
    overflow: hidden;
    ::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
        90deg,
        rgba(186, 185, 185, 0.3) 0,
        rgba(255, 255, 255, 0.5) 20%,
        rgba(255, 255, 255, 0.1) 60%,
        rgba(255, 255, 255, 0.6)
      );
      animation-name: ${shimmer};
      animation-duration: 0.8s;
      animation-iteration-count: infinite;
    }
  }
  .description {
    width: 150px;
    height: 20px;
    background-color: gray;
    margin-bottom: 0.2rem;
    overflow: hidden;
    position: relative;
    ::after {
      content: "";
      position: absolute;

      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
        90deg,
        rgba(186, 185, 185, 0.3) 0,
        rgba(255, 255, 255, 0.5) 20%,
        rgba(255, 255, 255, 0.1) 60%,
        rgba(255, 255, 255, 0.6)
      );
      animation-name: ${shimmer};
      animation-duration: 0.8s;
      animation-iteration-count: infinite;
    }
  }
  .button {
    width: 80px;
    height: 30px;
    background-color: gray;
    border-radius: 0.3rem;
    overflow: hidden;
    ::after {
      content: "";
      position: absolute;

      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
        90deg,
        rgba(186, 185, 185, 0.3) 0,
        rgba(255, 255, 255, 0.5) 20%,
        rgba(255, 255, 255, 0.1) 60%,
        rgba(255, 255, 255, 0.6)
      );
      animation-name: ${shimmer};
      animation-duration: 0.8s;
      animation-iteration-count: infinite;
    }
  }
  .cicle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: gray;
    margin-left: 0.5rem;
    overflow: hidden;
    position: relative;
    ::after {
      content: "";
      position: absolute;

      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
        90deg,
        rgba(186, 185, 185, 0.3) 0,
        rgba(255, 255, 255, 0.5) 20%,
        rgba(255, 255, 255, 0.1) 60%,
        rgba(255, 255, 255, 0.6)
      );
      animation-name: ${shimmer};
      animation-duration: 0.8s;
      animation-iteration-count: infinite;
    }
  }
  /* &::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(
    90deg,
    rgba(255,255,255, .3) 0,
    rgba(255,255,255, .5) 20%,
    rgba(255,255,255, .1) 60%,
    rgba(255,255,255, .6)
  );
  animation-name: ${shimmer};
  animation-duration: .8s;
  animation-iteration-count: infinite;
  content: ''; */
`;

/*
//comment (1)

{studentContext.student.QueryStudent.courses.map(
                  (item, index) => (
                    <CardProgressDetails key={index}>
                      <div className="card__header">
                        <div className="header__data">
                          <span className="language">
                            {item.idiom} {item.kids && " (Kids)"}
                          </span>
                        </div>
                        <button
                          onClick={() => ClickSummary(item.kids, item.idiom)}
                          className="btn__summary"
                        >
                          Summary
                        </button>
                      </div>
                      <CardProgresNew
                        score={Score(item.score).score}
                        level={Score(item.score).level}
                        scoreprint={Score(item.score).scoreprint}
                      />
                    </CardProgressDetails>
                  )
                )}
                */

/*
                {
                  Data.map((val, index) => (
                    <CardProgressDetails notStudent={true}>
                      <div className="card__header">
                        <div className="header__data">
                          <span className="language">{val.idiom}</span>
                        </div>
                        <button className="btn__summary">Summary</button>
                      </div>
                      <CardProgresNew score={val.porcentaje} />
                    </CardProgressDetails>
                  ));
                }

                */
const TextFeedbackFirst = styled.h2`
  font-family: "Sacramento", cursive;
  font-size: 2.8rem !important;
  font-weight: bold;
  text-align: center;
  line-height: normal;
  margin: 0;
`;
