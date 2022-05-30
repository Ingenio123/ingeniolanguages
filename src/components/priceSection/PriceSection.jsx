import { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import "../../assets/components/SectionPrices.css";
import ModalPackage from "../modalsPackage/modalPackage";
import ModalPackageFrench from "../modalsPackage/ModalPackageFrench";
import ModalPackageSpanish from "../modalsPackage/ModalPackageSpanish";
import ModalContext from "../Context/modlaContext";
import ModalForms from "../ModalsForm/ModalSignIn";
import { Link } from "react-router-dom";

export const PriceSection = () => {
  const [ShowModal, setShowModal] = useState(false);
  const [ShowModalFrench, setShowModalFrench] = useState(false);
  const [ShowModalSpanish, setShowModalSpanish] = useState(false);

  const OpenModal = () => {
    setShowModal((prev) => !prev);
  };

  const OpenModalFrench = () => {
    setShowModalFrench((prev) => !prev);
  };
  const OpenModalSpanish = () => {
    setShowModalSpanish((prev) => !prev);
  };
  const modalContext = useContext(ModalContext);
  return (
    // ref={price}
    <>
      <section className="container">
        <h1 className="text-center">Lessons packages</h1>
        <div id="Prices" className="mb-5"></div>
        <div className="mt-3"></div>
        <br />
        <br />
        <Row>
          <div className="col-md-4">
            <div className="">
              <div className="image_card english" onClick={OpenModal}>
                <TitleCard className="text-center">English</TitleCard>{" "}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="">
              <div className="image_card france" onClick={OpenModalFrench}>
                {" "}
                <TitleCard className="text-center">French</TitleCard>{" "}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="">
              <div className="image_card spanish" onClick={OpenModalSpanish}>
                <TitleCard className="text-center">Spanish</TitleCard>{" "}
              </div>
            </div>
          </div>
        </Row>
        <div className="viewmore">
          <Link to="/prices" className="btn btn-view mr-405">
            view more
          </Link>
        </div>
      </section>

      <ModalPackage
        ShowModal={ShowModal}
        setShowModal={setShowModal}
        modalcontext={modalContext}
      />
      <ModalPackageFrench
        ShowModalFrench={ShowModalFrench}
        setShowModalFrench={setShowModalFrench}
        modalcontext={modalContext}
      />
      <ModalPackageSpanish
        ShowModalSpanish={ShowModalSpanish}
        setShowModalSpanish={setShowModalSpanish}
        modalcontext={modalContext}
      />
      <ModalForms
        ShowModal={modalContext.ModalState}
        setShowModal={modalContext.setModalState}
      />
    </>
  );
};

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TitleCard = styled.h4`
  font-size: 1.5rem;
  color: #1a237e;
  font-weight: 600;
  z-index: -1 !important;
`;
