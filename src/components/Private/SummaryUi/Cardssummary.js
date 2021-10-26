import { useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Cards from "../ComponentsSumary/Cards";
import CardFeedBack from "../ComponentsSumary/CardFeedBack";
import { Temary } from "../UserUI/Temary/Temary";
import useCourse from "../../../hooks/useCourse";
import "./style.css";

export default function Cardssummary() {
  const { course, handleCourse, Loading, Error } = useCourse();

  useEffect(() => {
    handleCourse();
    // console.log("el course", course);
  }, []);
  console.log(Loading, Error, "course", course);
  // console.log(course);
  // function rederDAta() {
  //   course.courses.map((item, index) => {
  //     return (
  //       <Cards
  //         idiom="Spanish"
  //         porcentaje="0"
  //         color="#FEF9C3"
  //         textColor="rgba(253, 224, 71,.5)"
  //         primary="rgba(253, 224, 71,1)"
  //       />
  //     );
  //   });
  // }
  return (
    <div className="container">
      {Error ? (
        <ComponentError>
          <span>Error - Intentalo mas tarde </span>
        </ComponentError>
      ) : (
        <Flex>
          {!course ? (
            <>
              <Cards
                idiom="Spanish"
                porcentaje="0"
                color="#FEF9C3"
                textColor="rgba(253, 224, 71,.5)"
                primary="rgba(253, 224, 71,1)"
                TimeLossons="0 minutes"
              />
              <Cards
                idiom="French"
                porcentaje="0"
                color="#FECACA"
                textColor="rgba(239, 68, 68,.5)"
                primary="rgba(239, 68, 68,1)"
                TimeLossons="0 minutes"
              />
              <Cards
                idiom="English"
                porcentaje="0"
                color="#DBEAFE"
                textColor="rgba(59, 130, 246,.5)"
                primary="rgba(59, 130, 246,1)"
                TimeLossons="0 minutes"
              />
              <Cards
                idiom="Rusian"
                porcentaje="0"
                color="#FEE2E2"
                textColor="rgba(239, 68, 68,.5)"
                primary="rgba(239, 68, 68,1)"
                TimeLossons="0 minutes"
              />
              <Cards
                idiom="Germany"
                porcentaje="0"
                color="#FEF9C3"
                textColor="rgba(253, 224, 71,.5)"
                primary="rgba(253, 224, 71,1)"
                TimeLossons="0 minutes"
              />
              <Cards
                idiom="Korean"
                porcentaje="0"
                color="#F4F4F5"
                textColor="rgba(113, 113, 122,.5)"
                primary="rgba(113, 113, 122,1)"
                TimeLossons="0 minutes"
              />
            </>
          ) : (
            <>
              {Loading === true ? (
                <ComponentComplet>
                  <div className="bouncer">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </ComponentComplet>
              ) : (
                <Flex>
                  {course.courses.map((item, index) => (
                    <Cards
                      idiom={item.idiom}
                      porcentaje="0"
                      color="#FEF9C3"
                      textColor="rgba(253, 224, 71,.5)"
                      primary="rgba(253, 224, 71,1)"
                      TimeLossons={item.TimeLossons}
                    />
                  ))}
                </Flex>
              )}
            </>
          )}
        </Flex>
      )}
      {}

      {}

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

const ComponentError = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fee2e2;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 10px;
  span {
    color: #18181b;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 1;
  }
`;

const ComponentComplet = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

{
  /* <ComponentComplet>
  <div className="bouncer">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</ComponentComplet>; */
}
