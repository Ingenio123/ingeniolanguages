import "../../assets/components/HeaderHero.css";
import imgHero from "../../assets/images/LibaryPortada.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styled from "styled-components";
import { useEffect, useState } from "react";

import { Teachers } from "../SectionTeachers/Teachers";
import { PriceSection } from "../priceSection/PriceSection";
import { Link as LinkID } from "react-scroll";

import "./HeaderStyle.scss";
import ModalRequesFreeClass from "./ModalRequesFreeClass";

import useUser from "../../hooks/useUser";

const Icon = styled(AiOutlineShoppingCart)`
  height: 30px;
  width: 30px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderHero = ({ isLogged, ActivarLoged }) => {
  const [ShowForm, setShowForm] = useState(false);
  const { SignUp } = useUser();

  const OpenModal = () => {
    console.log("Open");
    setShowForm((prev) => !prev);
  };

  return (
    <>
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
              <ButtonBuyaLesson
                to="Prices"
                smooth={true}
                duration={1000}
                spy={true}
              >
                {" "}
                <Icon /> Buy a lesson Package
              </ButtonBuyaLesson>
              {/* <!-- Hero Btn Second --> */}
              {isLogged ? (
                ""
              ) : (
                <Button
                  onClick={() => OpenModal()}
                  className="request-free-class"
                >
                  Request Free Demo Lesson
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>
      <ModalRequesFreeClass
        ShowForm={ShowForm}
        setShowForm={setShowForm}
        SignUp={SignUp}
        isLogged={isLogged}
      />
      <Teachers />
      <PriceSection />
    </>
  );
};
export default HeaderHero;

const ButtonBuyaLesson = styled(LinkID)`
  padding: 17px 30px;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
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
