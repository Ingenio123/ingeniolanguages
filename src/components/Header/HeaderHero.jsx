import Images from "../DemoClass/ReviewClass";
import "../../assets/components/HeaderHero.css";
import imgHero from "../../assets/images/LibaryPortada.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styled from "styled-components";
import React, { useState, useEffect, useContext, useRef } from "react";

import { Teachers } from "../SectionTeachers/Teachers";
import { PriceSection } from "../priceSection/PriceSection";
import { useHistory, Link } from "react-router-dom";

import "./HeaderStyle.scss";
import ModalRequesFreeClass from "./ModalRequesFreeClass";
import useUser from "../../hooks/useUser";
import DemoClass from "../DemoClass/ModalDemoClass";
import FormDatas from "../DemoClass/Formdatas";
import FormDataOne from "../DemoClass/FormDemoUser";
import Url from "../Urls";

import useUserData from "../../hooks/useUserData";
import DataUserContext from "../Context/userDataContext";
import { useDispatch, useSelector } from "react-redux";
import { GetDataUser } from "../../redux/actions/UserData";

import ModalPromo from "./ModalPromo";
//
import SectionReviews from "../SectionReviews";
// import Carousel from "../Carousel";
import Carousel from "../Carousel/Carousel";
//

const Icon = styled(AiOutlineShoppingCart)`
  height: 30px;
  width: 30px;
  @media (max-width: 768px) {
    display: none;
  }
`;
// import Formtreedata  from "../DemoClass/Formdatas";

const HeaderHero = ({ isLogged, ActivarLoged }) => {
  const [ShowForm, setShowForm] = useState(false);
  const [ShowFormData, setShowFormData] = useState(false);
  // const dataUserContext = useContext(DataUserContext);
  const { GetData, DataUser, Loading, hasLoginError } = useUserData();
  const [DataPromo, setDataPromo] = useState({});
  const [ModalPromoState, setModalPromo] = useState(false);
  const { SignUp, send } = useUser();
  const UerData = useSelector((state) => state.UerData);
  console.log(UerData);
  const dispatch = useDispatch();
  const history = useHistory();
  // const history = useHistory();

  let refSetTimeout = useRef(null);
  // async function GetDataUserFunct() {
  //   dispatch(GetDataUser());
  //   setLoading(false);
  // }

  useEffect(() => {
    const funAsync = async () => {
      let response = await fetch(`${Url.url}/v1/data/getOne/promo`);
      let data = await response.json();
      console.log(data);
      setDataPromo(data.promo);
    };
    refSetTimeout.current = setTimeout(() => {
      setModalPromo((prev) => !prev);
    }, 4000);
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      funAsync();
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
    if (isLogged) {
      console.log(Object.keys(UerData).length);
      return dispatch(GetDataUser());
    }

    return () => clearTimeout(refSetTimeout.current);
  }, []);

  const closeModal = () => {
    setModalPromo((prev) => !prev);
  };

  const OpenModal = () => {
    console.log("Open");
    setShowForm((prev) => !prev);
  };

  // >>--------------------------- OPEN MODAL DEMO ---------------------------------<<
  const OnpenModalDemo = () => {
    setShowFormData(!ShowFormData);
    console.log(UerData);
  };
  // >>--------------------------- OPEN MODAL DEMO END ---------------------------------<<

  return (
    <>
      {ModalPromoState && (
        <ModalPromo
          data={DataPromo}
          closeModal={closeModal}
          history={history}
        />
      )}
      <header>
        {/* <!-- HERO SECTION -->     */}
        <div className="container-fluid hero">
          <img
            src={imgHero}
            alt="Img Header "
            className={isLogged ? "pt-50px" : "pt-100px"}
          />
          <div className="container">
            {/* <!-- Hero Title --> */}
            <h1>
              Learn a new language
              <br />
              Anytime
              <br />
              Anywhere
            </h1>
            {/* <!-- Hero Title Info --> */}
            <p className="text-md-1 parrafo_header color-gray-700">
              Learning a language has never been easier and more fun!
            </p>
            <div className="hero-btns">
              {/* <!-- Hero Btn First --> */}
              <ButtonBuyaLesson to="/prices">
                <Icon /> Buy a lesson Package
              </ButtonBuyaLesson>
              {/* <!-- Hero Btn Second --> */}
              <Button
                onClick={() => OpenModal()}
                className="request-free-class"
              >
                Request Free Demo Lesson
              </Button>
              {/* {isLogged ? (
                <Button
                  className="request-free-class"
                  onClick={() => OnpenModalDemo()}
                >
                  Request Free Demo Lesson
                </Button>
              ) : (
              )} */}
            </div>
          </div>
        </div>
      </header>
      {/* Object.keys(UerData).length > 0 */}
      {/* {isLogged && (
        <DemoClass
          mostrarModal={ShowFormData}
          modificadorModal={setShowFormData}
          title={
            UerData.demoClass !== false
              ? "Ya has requerido una demo class"
              : "Verifica los datos"
          }
          addData={UerData.addData}
          FirstName={UerData.FirstName}
          Email={UerData.email}
        >
          {UerData.addData === 3 && <FormDatas />}
          {UerData.addData === 1 && <FormDataOne />}
          {UerData.addData === 0 && <Images />}
        </DemoClass>
      )} */}

      <ModalRequesFreeClass
        route="democlass"
        ShowForm={ShowForm}
        setShowForm={setShowForm}
        // SignUp={SignUp}
        sendDataForEmail={send}
        isLogged={isLogged}
        hasLoginError={hasLoginError}
      />
      <Carousel />
      <Teachers />
      <PriceSection />
    </>
  );
};
// {/* <Content>{/* <Carousel /> */}</Content> */}
export default HeaderHero;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid red;
`;

const ButtonBuyaLesson = styled(Link)`
  padding: 17px 30px;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  :hover {
    color: #314584 !important;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem !important;
    margin-bottom: 20px !important;
    padding: 0.8rem 1rem;
    :hover {
      padding: 0.8rem 1rem;
      font-size: 1.2rem !important;
      margin-bottom: 20px !important;
    }
    :focus {
      padding: 0.8rem 1rem;
      font-size: 1.2rem !important;
      margin-bottom: 20px !important;
    }
    :active {
      padding: 0.8rem 1rem;
      font-size: 1.2rem !important;
      margin-bottom: 20px !important;
    }
  }
`;
const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 1rem;
  color: #314584;
  font-weight: 700;

  &:hover {
    color: #ff3946;
  }
`;

const Form = styled.form``;
const FormGroup = styled.div`
  display: flex;
`;
const FormInput = styled.input`
  padding: 0.5rem;
  border: 1px solid silver;
`;

// styles cars
