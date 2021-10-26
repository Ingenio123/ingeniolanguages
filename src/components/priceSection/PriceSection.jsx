import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import "../../assets/components/SectionPrices.css";
import ModalPackage from "../modalsPackage/modalPackage";
import ModalPackageFrench from "../modalsPackage/ModalPackageFrench";
import ModalPackageSpanish from "../modalsPackage/ModalPackageSpanish";

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

  return (
    // ref={price}
    <>
      <section className="container">
        <h1 className="text-center">Lessons packages</h1>
        <div id="Prices" className="mb-5"></div>
        <div className="mt-3"></div>
        <br />
        <br />
        <div className="row">
          <div className="col-md-4">
            <div className="">
              <div className="image_card english" onClick={OpenModal}>
                {" "}
                <TitleCard className="text-center">English</TitleCard>{" "}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="">
              <div className="image_card france" onClick={OpenModalFrench}>
                {" "}
                <TitleCard className="text-center">French </TitleCard>{" "}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="">
              <div className="image_card spanish" onClick={OpenModalSpanish}>
                {" "}
                <TitleCard className="text-center">Spanish</TitleCard>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalPackage ShowModal={ShowModal} setShowModal={setShowModal} />
      <ModalPackageFrench
        ShowModalFrench={ShowModalFrench}
        setShowModalFrench={setShowModalFrench}
      />
      <ModalPackageSpanish
        ShowModalSpanish={ShowModalSpanish}
        setShowModalSpanish={setShowModalSpanish}
      />
    </>
  );
};

const TitleCard = styled.h4`
  font-size: 1.5rem;
  color: #1a237e;
  font-weight: 600;
  z-index: -1 !important;
`;
