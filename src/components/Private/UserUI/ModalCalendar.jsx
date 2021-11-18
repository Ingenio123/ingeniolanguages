import { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import { BiX } from "react-icons/bi";

export default function ModalCalendar({
  setShowModal,
  showModal,
  url_teacher,
}) {
  const ModalRef = useRef();
  console.log(url_teacher);
  const Close = (e) => {
    if (ModalRef.current === e.target) {
      setShowModal(false);
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <>
      {showModal ? (
        <Background onClick={Close} ref={ModalRef}>
          <ModalWrapper>
            <iframe src={url_teacher} frameborder="0"></iframe>
            <BtnClose
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
}

const Background = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99999;
`;
const ModalWrapper = styled.div`
  width: 90%;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  border: none;
  position: relative;
  border-radius: 10px;
  iframe {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
const BtnClose = styled(BiX)`
  font-size: 2rem;
  color: black;
  position: absolute;
  top: 10px;
  right: 25px;
  z-index: 9999;
  cursor: pointer;
  :hover {
    cursor: pointer;
  }
`;
const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: black;
`;
