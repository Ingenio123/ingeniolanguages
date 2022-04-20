import styled, { keyframes } from "styled-components";
//components
import BookLessonTitleComponent from "../../../components/Book_Lesson/Title";
import SectionCardComponent from "../../../components/Book_Lesson/SectionCards";
import Grid from "../../../components/Book_Lesson/Grid";
import ModalComponent from "../../../components/Book_Lesson/Modal";
import ModalCalendar from "../../../components/Private/UserUI/ModalCalendar";
//

//context
import NavbarContext from "../../../context/NavbarContext";
import StudentContext from "../../../components/Context/StudentContext";
//end context

// hooks
import { Link } from "react-router-dom";
import { useEffect, useContext, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";

function Index() {
  // const { idiom } = useSelector((state) => state.GetIdiomReducer);
  const location = useLocation();
  const queryLocation = location.search;
  const contextNavbar = useContext(NavbarContext);
  const contextStudent = useContext(StudentContext);
  const [ShowModal, setShowModal] = useState(false);
  const [state, setstate] = useState(false);
  const [ValorCalendar, setValorCalendar] = useState("");
  //
  const handleClickModal = () => {
    return setShowModal(true);
  };
  //
  useEffect(() => {
    // console.log(queryLocation);
    // console.log(contextNavbar);
    contextNavbar.getIdiom(queryLocation);
  }, [queryLocation]);
  const UserNotStudent = () => {
    setShowModal((prev) => !prev);
  };
  const OpenModal = () => {
    setShowModal((prev) => !prev);
  };

  const valores = useCallback((param) => {
    // console.log("param:", param.calendar);
    // console.log(RecorreArray(studentContext.student.QueryStudent.courses));
    // da como resultado un numero int ->  entero  ===>  RecorreArray(student.QueryStudent.courses)
    // console.log(studentContext.student.QueryStudent.courses);
    function RecorreArray(param) {
      // console.log("Recorrer Array param", param);
      const datos = param.map((item, index) => {
        return item.time;
      });
      // console.log(parseInt(datos[0].slice(0, 2)));
      return parseInt(datos[0].slice(0, 2));
    }
    const val = param.calendar.filter(
      (item) =>
        item.time === RecorreArray(contextStudent.student.QueryStudent.courses)
    );
    //console.log("valor", val);
    setValorCalendar(val[0]);
  }, []);

  const ShowTypeModal = (param) => {
    if (contextStudent.student) {
      valores(param);
      setstate(true);
      OpenModal();
      return;
    } else {
      setstate(false);
      UserNotStudent();
    }
  };

  return (
    <Container>
      <div>
        {/* loading */}
        {contextNavbar.load ? (
          <h2>Loading...</h2>
        ) : (
          <>
            {state && (
              <ModalCalendar
                showModal={ShowModal}
                setShowModal={setShowModal}
                url_teacher={ValorCalendar.urlCalendar}
              />
            )}
            {/* component title Book a lesson  */}
            <ModalComponent
              notStudent={ShowModal}
              setNotStudent={setShowModal}
            />
            <BookLessonTitleComponent
              text="Book your"
              idiom={contextNavbar.idiom.idiom}
              textend="lesson now"
            />
            {/* component de las cards  */}
            <Grid
              id
              width="100%"
              column="3,1fr"
              column_gap=".5rem"
              row_gap=".5rem"
            >
              {contextNavbar.idiom.datos.map((item) => (
                <SectionCardComponent
                  image_url={item.img}
                  name_teacher={item.firstName}
                  idom="idiom"
                  eslogan={item.eslogan}
                  clickModal={ShowTypeModal}
                  calendar={item.calendar}
                  // shwoTypeModal={ShowTypeModal()}
                />
              ))}
            </Grid>
          </>
        )}
      </div>
      {/* <ContentBox>
        <Card>
          <h2>You cant't schedule a class yet </h2>
          <p>To shedule your lesson</p>
          <div>
            <Button>Buy now</Button>
            <span>or</span>
            <Button free={true} to="/democlass">
              Request free demo class
            </Button>
          </div>
        </Card>
      </ContentBox> */}
    </Container>
  );
}

export default Index;

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const CardSkeleton = styled.div`
  width: 100%;
  height: 200px;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  position: relative;
  /* border: 1px solid #f00909; */
`;

const ProductSkeleton = styled.div`
  display: inline-block;
  height: ${(props) => props.height || "14px"};
  width: ${(props) => props.width || "80%"};
  animation: ${skeletonKeyframes} 1300ms ease-in-out infinite;
  background-color: #eee;
  background-image: linear-gradient(90deg, #9d9d9d, #f5f5f5, #eee);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  margin-bottom: 8px;
  margin-top: ${(props) => props.marginTop || "0"};
`;

const PictureSkeleton = styled(ProductSkeleton)`
  margin-bottom: 16px;
  width: ${({ width }) => width || "20px"};
  height: ${({ height }) => height || "20px"};
  /* margin: auto; */
  display: block;
`;

const Container = styled.div`
  margin: 1rem 0;
  display: flex;
  padding: 0 3rem;
  column-gap: 0.5rem;
`;
const ContentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  box-shadow: 0px 7px 15px -1px rgba(0, 0, 0, 0.18);
  -webkit-box-shadow: 0px 7px 15px -1px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: 0px 7px 15px -1px rgba(0, 0, 0, 0.18);
  @media screen and (max-width: 768px) {
    background-color: gray;
  }
  min-height: 300px;
  max-height: 450px;
  max-width: 430px;
`;
const Card = styled.div`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    color: #18181b;
    font-size: 1.77rem;
    letter-spacing: -1px;
    font-weight: 600;
    margin: 0;
    line-height: 1;
  }
  p {
    font-size: 1.2rem;
    text-align: center;
  }
  span {
    font-size: 1.34rem;
    color: #6e757a;
  }
`;
const Button = styled(Link)`
  color: #fff;
  background-color: ${(props) =>
    props.free ? "#ff3838" : "rgb(79, 70, 229);"};
  padding: 0.4rem 1rem;
  border: none;
  font-size: 1rem;
  border-radius: 0.3rem;
`;
