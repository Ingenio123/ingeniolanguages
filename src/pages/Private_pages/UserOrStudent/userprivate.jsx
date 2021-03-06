import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import CardLists from "../../../components/Private/UserUI/HeaderStudent/Header";
import { Temary } from "../../../components/Private/UserUI/Temary/Temary";
import studentContext from "../../../components/Context/StudentContext";
import ListCard from "../../../components/Private/UserUI/HeaderStudent/CardList";

// import ContexCardIdiomProvider from "../../../context/CardIdiomContext";
export default function UserPrivate({ children, ...props }) {
  const { id } = useParams();
  const contextStudent = useContext(studentContext);
  const [OneCourse, setOneCourse] = useState({
    course: null,
  });

  // useEffect(() => {
  //   console.log("Initialize useEffect");
  //   // contextStudent.getStudent().then((res) => console.log(res));
  //   // console.log(response);
  // }, []);

  useEffect(() => {
    const idCourse = id;
    // console.log(contextStudent.student);
    //
    if (contextStudent.student) {
      console.log("Existe el student");
      let getOneCourse = contextStudent.student.QueryStudent.courses.filter(
        (e) => e._id === idCourse
      );
      //
      return setOneCourse({
        ...OneCourse,
        course: getOneCourse[0],
      });
    }

    let Datos = ListCard.filter((e) => e.idiom === id);
    console.log(Datos);

    return setOneCourse({
      ...OneCourse,
      course: Datos,
    });
  }, [id]);

  useEffect(() => {
    const idCourse = id;
    // console.log(contextStudent.student);
    //
    if (contextStudent.student) {
      console.log("Existe el student");
      let getOneCourse = contextStudent.student.QueryStudent.courses.filter(
        (e) => e._id === idCourse
      );
      //
      return setOneCourse({
        ...OneCourse,
        course: getOneCourse[0],
      });
    }

    let Datos = ListCard.filter((e) => e.idiom === id);
    console.log(Datos);

    return setOneCourse({
      ...OneCourse,
      course: Datos,
    });
  }, [contextStudent.loading]);

  return (
    <Container className="container">
      <ContentTemary>
        {contextStudent.loading || !OneCourse.course ? (
          <CardSkeleton>
            <div>
              <div className="skeleton title"></div>
              <div className="skeleton description"></div>
              <div className="skeleton button"></div>
            </div>
            <div className="skeleton cicle"></div>
          </CardSkeleton>
        ) : (
          <>
            {contextStudent.student ? (
              <>
                <CardLists course={OneCourse.course} />
              </>
            ) : (
              <>
                {Object.keys(OneCourse.course).length > 0 && (
                  <CardLists course={OneCourse?.course} {...props} />
                )}
              </>
            )}
          </>
        )}
        {/* end loading */}
        <Temary
          idiom={OneCourse.course?.idiom}
          kids={OneCourse.course?.kids}
          textSacramento={true}
        />
        {/* </ContexCardIdiomProvider> */}
      </ContentTemary>
    </Container>
  );
}

const Container = styled.main``;
const ContentTemary = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 485px 1fr;
  column-gap: 5.8rem;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 0;
    /* border: 2px solid black; */
  }
`;

// const CardList = styled.div`
//   width: 50%;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   border: 1px solid red;
// `;
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

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;
