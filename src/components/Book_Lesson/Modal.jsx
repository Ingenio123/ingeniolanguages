import { useCallback, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import OpsImagee from "../../assets/images/ops.png";
import OpsImage from "../../assets/images/Opps.jpg";

import ModalRequesFreeClass from "../Header/ModalRequesFreeClass";
import ButtonComponentRenew from "../ButtonsRenewPackage/buttons";
/**
 *
 * @param {ExipiredLessons} boolean
 * @returns Component UI
 */
export default function NotStudent({
  notStudent,
  setNotStudent,
  expiredLessons,
  handleClickButtonsRenew,
}) {
  const BackgroundRef = useRef();

  const [ShowForm, setShowForm] = useState(false);
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
          <ModalCard id="modal__">
            <Content>
              <GridText>
                {expiredLessons ? (
                  <DivText>
                    <TextXL>OOPS!</TextXL>
                    <TextMd>It's time to renew your lessons package!</TextMd>
                    <TextSm>To schedule your next lessons, please</TextSm>
                  </DivText>
                ) : (
                  <DivText>
                    <TextXL>OOPS!</TextXL>
                    <TextMd>You can't schedule a class yet.</TextMd>
                    <TextSm>To schedule your lessons</TextSm>
                  </DivText>
                )}
                {expiredLessons ? (
                  <ButtonComponentRenew
                    handleClickPackage={handleClickButtonsRenew}
                  />
                ) : (
                  <DivText start>
                    <Button to="/prices">Buy a lesson</Button>
                    <TextSm>Or</TextSm>
                    <ButtonFree
                      free
                      onClick={() => {
                        setNotStudent((prev) => !prev);
                        setShowForm((prev) => !prev);
                      }}
                    >
                      Request free lesson
                    </ButtonFree>
                  </DivText>
                )}
              </GridText>
            </Content>
            <ContentImg img={expiredLessons ? OpsImage : OpsImagee}>
              <ButtonClose
                onClick={() => {
                  setNotStudent((prev) => !prev);
                }}
              />
            </ContentImg>
          </ModalCard>
        </Background>
      ) : null}
      <ModalRequesFreeClass
        route="democlass"
        ShowForm={ShowForm}
        setShowForm={setShowForm}
        // SignUp={SignUp}
      />
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
  @media screen and (max-width: 768px) {
    height: 70%;
    width: 90%;
    grid-template-columns: 1fr;
    grid-template-rows: 50% 50%;
    grid-template-areas: "image" "content";
  }
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
  @media screen and (max-width: 768px) {
    grid-area: content;
    border-top-left-radius: 0;
    border-bottom-right-radius: 10px;
  }
`;
const ContentImg = styled.div`
  position: relative;
  background-image: url(${(props) => props.img});
  background-size: cover;
  object-fit: cover;
  width: 100%;
  height: 100%;
  -webkit-border-top-right-radius: 10px;
  -webkit-border-bottom-right-radius: 10px;
  -moz-border-radius-topright: 10px;
  -moz-border-radius-bottomright: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  @media screen and (max-width: 768px) {
    grid-area: image;
    border-bottom-right-radius: 0;
    border-top-left-radius: 10px;
  }
`;

const GridText = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 200px);
  padding: 0.5rem 1rem;
  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(2, 1fr);

    height: 100%;
    row-gap: 0.85rem;
  }
`;
const DivText = styled.div`
  display: flex;
  justify-content: ${(props) => (props.start ? "start" : "end")};
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  @media screen and (max-width: 768px) {
  }
`;

const ButtonFree = styled.button`
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

const Button = styled(Link)`
  transition: all 0.2s ease;
  padding: 0.2rem 1rem;

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
  margin-top: 0.5rem;
  letter-spacing: -1px;
  font-size: 1.563rem;
  line-height: normal;
  text-align: center;
`;
const TextSm = styled.p`
  color: #616161;
  margin: 0;
  margin-top: 0.5rem;
  font-size: 1.21875rem;
  text-align: center;
  line-height: normal;
  @media screen and (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;
