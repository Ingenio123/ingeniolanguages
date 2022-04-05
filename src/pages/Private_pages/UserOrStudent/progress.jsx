//librerias
import styled, { keyframes } from "styled-components";
// librerias
import axios from "axios";
// hooks
import { useContext, useState, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
//  end hooks
// useHooks
import { useGetSummaryHooks } from "../../../hooks/useGetSummary.hooks";
// end useHooks
//components
import CardProgress from "../../../components/Progress_Lesson/CardsChart";
import CardFeedback from "../../../components/Progress_Lesson/CardFeedback";
import { CardProgresNew } from "../../../components/Progress_Lesson/CardProgress";
import { ComponentButtons } from "../../../components/Buttons/ButtonLessonPackage";
//
import ContextStudent from "../../../components/Context/StudentContext";
import SummaryProgress from "../../../context/SummaryContext";
//data Json
import Data from "./dataprogress.json";
//services

function Progress() {
  const studentContext = useContext(ContextStudent);
  const summaryContext = useContext(SummaryProgress);
  //
  const { id } = useParams();
  const [DataIdiom, setDataIdom] = useState({});
  //useHooks
  // const { getSummary, loading } = useGetSummaryHooks();

  //#####################################################################
  //                         GET SCORE PROCESS
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
    //
    if (studentContext.student) {
      console.log("#### GET SUMARY ######");
      summaryContext.GetSummary();
      // console.log(studentContext.student.QueryStudent.courses);
      let datos = studentContext.student.QueryStudent.courses.filter(
        (i) => i._id === id
      );
      // console.log(datos[0].idiom, datos[0].kids);
      let valorScore = Score(datos[0].score);
      setDataIdom({
        ...DataIdiom,
        idiom: datos[0].idiom,
        kids: datos[0].kids,
        valorScore,
      });
    }
    //
  }, [studentContext.loading]);

  useEffect(() => {
    console.log("Get sumary for id ");
    if (studentContext.student) {
      if (summaryContext.AllSummary.length > 0) {
        let datos = studentContext.student.QueryStudent.courses.filter(
          (i) => i._id === id
        );
        summaryContext.SearchForId(datos[0].idiom, datos[0].kids);
        let valorScore = Score(datos[0].score);
        return setDataIdom({
          ...DataIdiom,
          idiom: datos[0].idiom,
          kids: datos[0].kids,
          valorScore,
        });
      }
      summaryContext.GetSummary();
      let datos = studentContext.student.QueryStudent.courses.filter(
        (i) => i._id === id
      );
      // console.log(datos[0].idiom, datos[0].kids);
      let valorScore = Score(datos[0].score);
      return setDataIdom({
        ...DataIdiom,
        idiom: datos[0].idiom,
        kids: datos[0].kids,
        valorScore,
      });
    }
    let valorScore = Score(0);
    setDataIdom({
      ...DataIdiom,
      idiom: id,
      kids: false,
      valorScore,
    });
  }, [id]);
  //
  useEffect(() => {
    if (summaryContext.AllSummary.length > 0) {
      let datos = studentContext.student.QueryStudent.courses.filter(
        (i) => i._id === id
      );
      summaryContext.SearchForId(datos[0].idiom, datos[0].kids);
    }
  }, [summaryContext.loading]);

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
                {summaryContext.loading ? (
                  <CardSkeleton>
                    <div className="">
                      <div className="skeleton title"></div>
                      <div className="skeleton description"></div>
                      <div className="skeleton button"></div>
                    </div>
                    <div className="skeleton cicle"></div>
                  </CardSkeleton>
                ) : (
                  <CardProgressDetails>
                    <div className="card__header">
                      <div className="header__data">
                        <TextFeedbackFirst>
                          {DataIdiom.idiom} {DataIdiom.kids && " (kids)"}
                        </TextFeedbackFirst>
                      </div>
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
                        {DataIdiom.idiom} {DataIdiom.kids && " (kids)"}
                      </TextFeedbackFirst>
                    </div>
                  </div>
                  <CardProgresNew
                    score={DataIdiom.valorScore?.score}
                    level={DataIdiom.valorScore?.level}
                    scoreprint={DataIdiom.valorScore?.scoreprint}
                  />
                </CardProgressDetails>

                <ComponentButtons />
              </>
            )}
          </>
        )}
      </ContentFlex>
      <CardFeedback
        ItIsEmpty={summaryContext.data.length > 0 ? false : true}
        Summary={summaryContext.data}
        loading={summaryContext.loading}
        isStudent={studentContext.student ? true : false}
        idiom={DataIdiom.idiom}
        kids={DataIdiom.kids}
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
  width: ${({ notStudent }) => (notStudent ? "100%" : "100%")};
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
