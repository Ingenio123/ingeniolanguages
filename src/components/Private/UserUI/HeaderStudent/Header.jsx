import { useEffect, useState, useContext } from "react";
import styled, { css } from "styled-components";
import { Link, useHistory } from "react-router-dom";
import useTeacher from "../../../../hooks/useTeachers";

// Ui
import {
  IoCalendarOutline,
  IoTimeOutline,
  IoBarChartOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";

import { FaCartPlus } from "react-icons/fa";
import studentContext from "../../../Context/StudentContext";
import CardList from "./CardList";
import French from "../../../../assets/images/svgs/French.svg";
import English from "../../../../assets/images/svgs/Inglaterra.svg";
import Spanish from "../../../../assets/images/svgs/Espanish.svg";
import Ruso from "../../../../assets/images/svgs/russia.svg";
import korea from "../../../../assets/images/svgs/korea.svg";
import Germany from "../../../../assets/images/svgs/germany.svg";

// imgs png
import Alemania from "../../../../assets/images/svgs/Alemania.png";
import Spain from "../../../../assets/images/svgs/Spain.png";
import Rusia from "../../../../assets/images/svgs/Rusia.png";
import KoreaImg from "../../../../assets/images/svgs/Korea.png";
import Francia from "../../../../assets/images/svgs/Francia.png";
import Inglaterra from "../../../../assets/images/svgs/Inglaterra.png";

const imgs = (idiom) => {
  switch (idiom) {
    case "French":
      return French;
    case "English":
      return English;
    case "Spanish":
      return Spanish;
    case "Russian":
      return Ruso;
    case "Korean":
      return korea;
    case "Germany":
      return Germany;
    default:
      return English;
  }
};
const imgFondo = (idiom) => {
  switch (idiom) {
    case "French":
      return Francia;
    case "English":
      return Inglaterra;
    case "Spanish":
      return Spain;
    case "Russian":
      return Rusia;
    case "Korean":
      return KoreaImg;
    case "Aleman":
      return Alemania;
    case "Germany":
      return Alemania;
    default:
      return English;
  }
};

export default function Header() {
  const history = useHistory();
  const contextStudent = useContext(studentContext);
  const teachers = useTeacher();
  const { GetTeachers } = teachers;
  const Home = () => {
    history.push("/");
  };

  useEffect(() => {
    contextStudent.getStudent();
    // console.log(contextStudent);
    // console.log("Header Student", teachers);
  }, []);

  return (
    <ContainerHeader>
      <ContentCards className="container">
        {contextStudent.student ? (
          <>
            {contextStudent.student.QueryStudent.courses.map((item, index) => (
              <CardContent key={index} img={imgFondo(item.idiom)}>
                <CardCourse>
                  <ContentImage>
                    <Img url={imgs(item.idiom)} width="200px" alt="" />
                    <ItemsDeCompra flex style={{ width: "100%" }}>
                      <ButtonViewTemary
                        onClick={() => {
                          GetTeachers(item._id, item.idiom);
                        }}
                      >
                        Book now
                      </ButtonViewTemary>
                    </ItemsDeCompra>
                  </ContentImage>
                  <div>
                    <CardHeader>
                      <span>{item.idiom}</span>
                      <BuyNewCourse onClick={Home} title="Buy a now package" />
                    </CardHeader>
                    <DatosDeCompra>
                      <ItemsDeCompra>
                        <IconTime />
                        <ItemContent>
                          Duration of each lesson: {item.TimeLossons}
                          {/* Time de cada lessons: 40 min lessons */}
                        </ItemContent>
                      </ItemsDeCompra>
                      <ItemsDeCompra>
                        <IconNumberLessons />
                        <ItemContent>
                          Number of lessons: {item.lessonsTotal} lessons
                        </ItemContent>
                      </ItemsDeCompra>
                      <ItemsDeCompra>
                        <IconCalendar />
                        <ItemContent>Dias de expiracion</ItemContent>
                      </ItemsDeCompra>
                    </DatosDeCompra>
                  </div>
                </CardCourse>
              </CardContent>
            ))}
          </>
        ) : (
          <>
            {CardList.map((item, index) => (
              <CardContent key={index} img={imgFondo(item.idiom)}>
                <CardCourse>
                  <ContentImage>
                    <Img url={imgs(item.idiom)} alt="" width="200px" />
                    <ItemsDeCompra flex style={{ width: "100%" }}>
                      <ButtonViewTemary
                        onClick={() => GetTeachers(item.idIdiom, item.idiom)}
                      >
                        Book now
                      </ButtonViewTemary>
                    </ItemsDeCompra>
                  </ContentImage>
                  <div>
                    <CardHeader>
                      <span>{item.idiom}</span>
                      <BuyNewCourse onClick={Home} title="Buy a now package" />
                    </CardHeader>
                    <DatosDeCompra>
                      <ItemsDeCompra>
                        <IconTime />
                        <ItemContent>
                          Duration of each lesson: {item.timeLesson}
                          {/* Time de cada lessons: 40 min lessons */}
                        </ItemContent>
                      </ItemsDeCompra>
                      <ItemsDeCompra>
                        <IconNumberLessons />
                        <ItemContent>
                          Number of lessons: {item.lessonTotal} lessons
                        </ItemContent>
                      </ItemsDeCompra>
                      <ItemsDeCompra>
                        <IconCalendar />
                        <ItemContent>
                          Lessons package expiration: 22/22/21
                        </ItemContent>
                      </ItemsDeCompra>
                    </DatosDeCompra>
                  </div>
                </CardCourse>
              </CardContent>
            ))}
          </>
        )}
      </ContentCards>
    </ContainerHeader>
  );
}

const CardContent = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 0.5rem;
`;
const ContentCards = styled.div`
  display: flex;
  overflow: auto;
  &::-webkit-scrollbar {
    height: 5px; /* Tamaño del scroll en horizontal */
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: silver;
    cursor: pointer;
  }
`;
const ContainerHeader = styled.div`
  margin-top: 10px;
  display: flex;
`;

const BuyNewCourse = styled(FaCartPlus)`
  color: #fff;
  opacity: 0.8;
  transition: all 0.2s ease-out;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const CardCourse = styled.div`
  display: grid;
  grid-template-columns: 150px 280px;
  border-radius: 5px;
  padding: 1rem 1rem 0.8rem 0.2rem;
  /* background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px); */
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  color: #fff;
  font-size: 0.8rem;
  @media (max-width: 768px) {
    width: 312px;
    font-size: 12px;
    grid-template-columns: max-content;
  }
`;
const CardHeader = styled.div`
  font-size: 1.5em;
  font-weight: 700;
  border-bottom: 1px solid #d4d4d8;
  width: calc(100% - 1.1em);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: calc(312px - 2em);
  }
`;

const DatosDeCompra = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const ItemsDeCompra = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  align-items: center;
  align-content: center;
  ${(props) => (props.flex ? `justify-content: flex-end` : "")};
  padding: 0.2rem 0;
`;

const StyleIcon = css`
  font-size: 1.2rem;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;
const IconCalendar = styled(IoCalendarOutline)`
  ${StyleIcon};
`;

const IconTime = styled(IoTimeOutline)`
  ${StyleIcon};
`;
const IconTemary = styled(IoDocumentTextOutline)`
  ${StyleIcon};
`;
const IconNumberLessons = styled(IoBarChartOutline)`
  ${StyleIcon};
`;
const ItemContent = styled.span`
  font-size: calc(1em + 2px);
`;

const ContentImage = styled.div`
  align-content: center;
  align-self: center;
  justify-self: center;
`;
const Img = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  border: 3px solid white;
  margin: 0 auto;

  @media (max-width: 768px) {
    /* width: calc(315px - 2.8em); */
    display: none;
  }
`;

const ButtonViewTemary = styled.button`
  font-size: calc(1em + 2px);
  color: #fff;
  background-color: #314584;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  border: none;
  :hover {
    color: #fff;
    background-color: #284196;
  }
`;