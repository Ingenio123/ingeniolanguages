import { useCallback, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
// import OpsImage from "../../../../assets/images/ops.png";
import OpsImage from "../../assets/images/ops.png";
import { useHistory } from "react-router-dom";

export default function NotStudent({ notStudent, setNotStudent }) {
  const BackgroundRef = useRef();
  const history = useHistory();
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && notStudent) {
        setNotStudent(false);
      }
    },
    [notStudent, setNotStudent]
  );
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const close = (e) => {
    if (BackgroundRef.current === e.target) {
      setNotStudent(false);
    }
  };
  return (
    <>
      {notStudent ? (
        <Background onClick={(e) => close(e)} ref={BackgroundRef}>
          <ModalCard>
            <Content>
              <GridText>
                <DivText>
                  <TextXL>OOPS!</TextXL>
                  <TextMd>You can't schedule a class yet.</TextMd>
                  <TextSm>To schedule your lessons</TextSm>
                </DivText>
                <DivText start>
                  <Button>Buy a lesson</Button>
                  <TextSm>Or</TextSm>
                  <Button free to="/democlass">
                    Request free lesson
                  </Button>
                </DivText>
              </GridText>
            </Content>
            <ContentImg img={OpsImage}>
              <ButtonClose onClick={() => setNotStudent((prev) => !prev)} />
            </ContentImg>
          </ModalCard>
        </Background>
      ) : null}
    </>
  );
}

const Background = styled.main`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled.div`
  width: 720px;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 10px;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  -webkit-border-top-left-radius: 10px;
  -webkit-border-bottom-left-radius: 10px;
  -moz-border-radius-topleft: 10px;
  -moz-border-radius-bottomleft: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
const ContentImg = styled.div`
  position: relative;
  background-image: url(${(props) => props.img});
  background-size: cover;
  width: 100%;
  height: 100%;
  -webkit-border-top-right-radius: 10px;
  -webkit-border-bottom-right-radius: 10px;
  -moz-border-radius-topright: 10px;
  -moz-border-radius-bottomright: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const GridText = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 200px);
  padding: 0.5rem 1rem;
`;
const DivText = styled.div`
  display: flex;
  justify-content: ${(props) => (props.start ? "start" : "center")};
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;
const Button = styled(Link)`
  transition: all 0.2s ease;
  padding: 0.2rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  color: #fff;
  font-size: 1rem;
  border: none;
  outline: none;
  background-color: ${(props) => (props.free ? "#e84f4b" : "#4338ca")};

  :hover {
    color: #fff;
    background-color: ${(props) => (props.free ? "#e2231e " : "#3d32bc")};
  }
`;

const ButtonClose = styled(IoClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  color: black;
  cursor: pointer;
`;

const TextXL = styled.h2`
  color: #212121;
  margin: 0;
  line-height: 1;
  letter-spacing: -2px;
  font-style: italic;
  font-size: 2.5rem;
`;
const TextMd = styled.h3`
  color: #212121;
  margin: 0;
  letter-spacing: -1px;
  font-size: 1.563rem;
`;
const TextSm = styled.p`
  color: #616161;
  margin: 0;
  font-size: 1.21875rem;
`;
