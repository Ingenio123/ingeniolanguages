import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CardLists from "../../../components/Private/UserUI/HeaderStudent/Header";
import { Temary } from "../../../components/Private/UserUI/Temary/Temary";
import studentContext from "../../../components/Context/StudentContext";

// import ContexCardIdiomProvider from "../../../context/CardIdiomContext";
export default function UserPrivate({ children }) {
  const { id } = useParams();
  const contextStudent = useContext(studentContext);
  const [OneCourse, setOneCourse] = useState({
    course: {},
  });
  useEffect(() => {
    contextStudent.getStudent();
  }, []);

  useEffect(() => {
    const idCourse = id;
    // console.log(idCourse);
    if (contextStudent.student?.QueryStudent.courses) {
      // console.log("Course");
      let getOneCourse = contextStudent.student.QueryStudent.courses.filter(
        (e) => e._id === idCourse
      );
      console.log(getOneCourse[0]);
      setOneCourse({
        ...OneCourse,
        course: getOneCourse[0],
      });
    }
  }, [id]);

  return (
    <Container>
      <ContentTemary>
        {/* <ContexCardIdiomProvider> */}
        <CardLists course={OneCourse.course} />
        <Temary
          idiom={OneCourse.course.idiom}
          kids={OneCourse.course.kids}
          textSacramento={true}
        />
        {/* </ContexCardIdiomProvider> */}
      </ContentTemary>
    </Container>
  );
}

const Container = styled.main`
  margin: 3rem 3rem;

  max-width: 1272px;
  @media screen and (max-width: 768px) {
    margin: 0 3rem;
  }
`;
const ContentTemary = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 485px 1fr;
  column-gap: 5.8rem;
`;

// const CardList = styled.div`
//   width: 50%;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   border: 1px solid red;
// `;
