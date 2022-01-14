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

function Progress() {
  const studentContext = useContext(ContextStudent);
  const [Summary, setSummary] = useState(null);

  const click = useCallback(async function GetData(Language) {
    const user = JSON.parse(window.localStorage.getItem("user"));
    const resp = await axios.get(
      `http://localhost:4000/student/summary?language=${Language}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    setSummary(resp.data.data);
  }, []);
  return (
    <GridColumns>
      <ContentFlex>
        {/* <Cardtwo>
          <CardSkeleton></CardSkeleton>
        </Cardtwo> */}
        {studentContext.loading && <h6>loading ...</h6>}
        {studentContext.student ? (
          <>
            {studentContext.student.QueryStudent.courses.map((item, index) => (
              <CardProgress
                idiom={item.idiom}
                color={"#fef08a"}
                TimeLossons={item.time}
                textColor={"#e4d038"}
                primary={"#c4b22f"}
                porcentaje={0}
                // setLangauge={setLangauge}
                click={click}
              />
            ))}
          </>
        ) : (
          <>
            {Data.map((val) => (
              <CardProgress
                idiom={val.idiom}
                color={val.color}
                TimeLossons={val.TimeLossons}
                textColor={val.textColor}
                primary={val.primary}
                porcentaje={val.porcentaje}
              />
            ))}
          </>
        )}
      </ContentFlex>
      <CardFeedback Summary={Summary} />
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

const Cardtwo = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background: silver;
`;
const CardSkeleton = styled.div`
  display: inline-block;
  height: 50px;
  width: 50px;
  
  position: relative;
  overflow: hidden;
  background-color: #DDDBDD;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#dc0000, 1) 0,
      rgba(#742f2f, 1) 20%,
      rgba(#941414, 1) 60%,
      rgba(#ff0101, 1)
    );
    animation-name: ${shimmer};
    animation-duration: .8s;
    animation-iteration-count: infinite;
    content: '';
`;
