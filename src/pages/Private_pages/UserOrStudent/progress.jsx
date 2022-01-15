//librerias
import styled, { keyframes } from "styled-components";
// librerias
import axios from "axios";
// hooks
import { useCallback, useContext, useState, useEffect } from "react";
//  end hooks
//components
import CardProgress from "../../../components/Progress_Lesson/CardsChart";
import CardFeedback from "../../../components/Progress_Lesson/CardFeedback";
//end components
import ContextStudent from "../../../components/Context/StudentContext";
//data Json
import Data from "./dataprogress.json";
//end  data Json
import Url from "../../../components/Urls";

function Progress() {
  const studentContext = useContext(ContextStudent);
  const [Summary, setSummary] = useState(null);

  useEffect(() => {
    console.log(studentContext);
    async function GetData(Language) {
      const user = JSON.parse(window.localStorage.getItem("user"));
      const resp = await axios.get(
        `${Url.url}/student/summary?language=${Language}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setSummary(resp.data.data);
    }
    // GetData();
    if (studentContext.loading !== true && !studentContext.error) {
      console.log(studentContext.student.QueryStudent.courses[0].idiom);
      GetData(studentContext.student.QueryStudent.courses[0].idiom);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentContext.student]);

  const click = useCallback(async function GetData(Language) {
    const user = JSON.parse(window.localStorage.getItem("user"));
    if (!studentContext.student) {
      return setSummary(null);
    }
    const resp = await axios.get(
      `http://localhost:4000/student/summary?language=${Language}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    return setSummary(resp.data.data);
  }, []);
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
                {studentContext.student.QueryStudent.courses.map(
                  (item, index) => (
                    <CardProgress
                      idiom={item.idiom}
                      color={"#fef08a"}
                      TimeLossons={item.time}
                      textColor={"#e4d038"}
                      primary={"#c4b22f"}
                      porcentaje={0}
                      // setLangauge={setLangauge}
                      click={click}
                      key={index}
                    />
                  )
                )}
              </>
            ) : (
              <>
                {Data.map((val, index) => (
                  <CardProgress
                    idiom={val.idiom}
                    color={val.color}
                    TimeLossons={val.TimeLossons}
                    textColor={val.textColor}
                    primary={val.primary}
                    porcentaje={val.porcentaje}
                    key={index}
                    click={click}
                  />
                ))}
              </>
            )}
          </>
        )}
      </ContentFlex>
      <CardFeedback Summary={Summary} loading={studentContext.loading} />
    </GridColumns>
  );
}
export default Progress;
const GridColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 20px 50px;
  max-width: 1280px;
`;
const ContentFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
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
