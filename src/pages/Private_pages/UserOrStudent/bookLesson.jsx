import styled from "styled-components";
//components
import BookLessonTitleComponent from "../../../components/Book_Lesson/Title";
import SectionCardComponent from "../../../components/Book_Lesson/SectionCards";
import Grid from "../../../components/Book_Lesson/Grid";
import ModalComponent from "../../../components/Book_Lesson/Modal";

//

//context
import NavbarContext from "../../../context/NavbarContext";
//

// hooks
import { Link } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

function Index() {
  // const { idiom } = useSelector((state) => state.GetIdiomReducer);
  const location = useLocation();
  const queryLocation = location.search;
  const contextNavbar = useContext(NavbarContext);
  const [ShowModal, setShowModal] = useState(false);
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

  return (
    <Container>
      <div>
        {/* loading */}
        {contextNavbar.load ? (
          <h2>Loading...</h2>
        ) : (
          <>
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
              width="100%"
              column="2,1fr"
              column_gap=".5rem"
              row_gap=".5rem"
            >
              {contextNavbar.idiom.datos.map((item) => (
                <SectionCardComponent
                  image_url={item.img}
                  name_teacher={item.firstName}
                  idom="idiom"
                  eslogan={item.eslogan}
                  clickModal={handleClickModal}
                />
              ))}
            </Grid>
          </>
        )}
      </div>
      <ContentBox>
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
      </ContentBox>
    </Container>
  );
}

export default Index;

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
