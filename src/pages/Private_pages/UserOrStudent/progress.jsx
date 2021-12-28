//librerias
import styled from "styled-components";
// librerias
// hooks
import { useContext } from "react";
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

  return (
    <GridColumns>
      <ContentFlex>
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
      <CardFeedback />
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
