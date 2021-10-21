import { useContext, useEffect } from "react";
import styled from "styled-components";
import Cards from "../ComponentsSumary/Cards";
import CardFeedBack from "../ComponentsSumary/CardFeedBack";
import { Temary } from "../UserUI/Temary/Temary";
import contextStudent from "../../Context/StudentContext";
export default function Cardssummary() {
  const studentContext = useContext(contextStudent);

  useEffect(() => {
    studentContext.getStudent();
  }, []);
  return (
    <div className="container">
      <Flex>
        {studentContext.student.success === true &&
        studentContext.student.QueryStudent.courses.length > 0 ? (
          <>
            {studentContext.student.QueryStudent.courses.map((item, index) => (
              <Cards
                idiom={item.idiom}
                porcentaje="0"
                color="#FEF9C3"
                textColor="rgba(253, 224, 71,.5)"
                primary="rgba(253, 224, 71,1)"
              />
            ))}
          </>
        ) : (
          <>
            <Cards
              idiom="Spanish"
              porcentaje="0"
              color="#FEF9C3"
              textColor="rgba(253, 224, 71,.5)"
              primary="rgba(253, 224, 71,1)"
            />
            <Cards
              idiom="English"
              porcentaje="0"
              color="rgba(59, 130, 246,.1)"
              textColor="rgba(59, 130, 246,.5)"
              primary="rgba(59, 130, 246,1)"
            />
            <Cards
              idiom="French"
              porcentaje="0"
              color="rgba(167, 139, 250,.1)"
              textColor="rgba(124, 58, 237,.5)"
              primary="rgb(124, 58, 237)"
            />
            <Cards
              idiom="Russian"
              porcentaje="0"
              color="rgba(56, 189, 248,.1)"
              textColor="rgba(56, 189, 248,.5)"
              primary="rgba(56, 189, 248,1)"
            />
            <Cards
              idiom="Korean"
              porcentaje="0"
              color="rgba(239, 68, 68,.1)"
              textColor="rgba(239, 68, 68,.5)"
              primary="rgba(239, 68, 68,1)"
            />
            <Cards
              idiom="Germany"
              porcentaje="0"
              color="rgba(209, 250, 229,.2)"
              textColor="rgba(34, 197, 94,.5)"
              primary="rgba(34, 197, 94,1)"
            />
          </>
        )}
      </Flex>
      <GridLayout>
        <Temary />
        <ContentCardFeedback>
          <CardFeedBack />
        </ContentCardFeedback>
      </GridLayout>
    </div>
  );
}
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  @media screen and (max-width: 760px) {
    justify-content: center;
  }
`;

const GridLayout = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15px;
  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const ContentCardFeedback = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`;
