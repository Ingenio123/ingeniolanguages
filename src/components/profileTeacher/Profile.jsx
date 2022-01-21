import { HeaderHero } from "./HeaderHero";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
//component cart

import BoxCart from "../Boxcart/Boxcart";

// import ModalPackageFrench from "../modalsPackage/ModalPackageFrench";
// import ModalPackageSpanish from "../modalsPackage/ModalPackageSpanish";
// import ModalPackageEnglish from "../modalsPackage/modalPackage";
// import Packages from "../Packages";

import { PriceSection } from "../priceSection/PriceSection";
import styled from "styled-components";

export const Profile = () => {
  const { idTeacher } = useParams();
  // --------------------- STATE  ---------------------------------- //
  const [Data, setData] = useState([]);
  const [Flags, setFlags] = useState([]);
  const [ShowModalSpanish, setShowModalSpanish] = useState(false);
  const [ShowModalEnglish, setShowModalEnglish] = useState(false);
  const [ShowModalFrench, setShowModalFrench] = useState(false);

  // --------------------- END STATE  ------------------------------ //

  const getData = () => {
    axios
      .get(`https://www.ingenioapi.com/data/teacher/${idTeacher}`)
      .then((res) => {
        setData(res.data.teacher);
        setFlags(res.data.teacher.flags);
      });
  };

  useEffect(() => {
    getData();
  }, [idTeacher]);
  useEffect(() => {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <BoxCart />
      <HeaderHero data={Data} />

      <div className="container  ">
        <section className="presentation">
          <p>{Data.description} </p>
        </section>
        <section className="teaches_profesional">
          <div className="data">
            <h4 className="mb-1  font-w-600 font-md">
              Languages {Data.firstName} teaches
            </h4>
            {Flags.map((item, index) => (
              <div className="data_flag" key={index}>
                <img src={item.urlFlag} alt="flag" />
                <h6>{item.nameFlag}</h6>
              </div>
            ))}
          </div>
          <div className="profesional_background">
            <span>
              <h4 className="font-w-600 mb-1">Profesional background</h4>
            </span>
            <p>{Data.profesionalBackround}</p>
          </div>
        </section>
        <section>
          <H4 className="font-w-600 mb-1">Hobbies and interests</H4>
          <Parrafo>{Data.Interests}</Parrafo>
        </section>
        {/* SECTION CARDS PRICES PACKAGE  */}
        {/* <Packages /> */}
        {/* END SECTION CARDS PRICES PACKAGE  */}
      </div>
      <PriceSection />
      <Separator />

      {/* --------------- SECTION PRICES ------------------ */}
      {/* <ModalPackageSpanish
        ShowModalSpanish={ShowModalSpanish}
        setShowModalSpanish={setShowModalSpanish}
      />
      <ModalPackageFrench
        ShowModalFrench={ShowModalFrench}
        setShowModalFrench={setShowModalFrench}
      />
      <ModalPackageEnglish
        ShowModal={ShowModalEnglish}
        setShowModal={setShowModalEnglish}
      /> */}
      {/* --------------- END SECTION PRICES -------------  */}
    </>
  );
};

const Separator = styled.div`
  margin: 4rem 0 0;
`;

const H4 = styled.h4`
  font-size: 2rem;
`;

const Parrafo = styled.p`
  line-height: 1.5;
  font-size: 1.2rem;
`;
