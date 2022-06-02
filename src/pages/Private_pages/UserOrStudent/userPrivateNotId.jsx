import styled, { css } from "styled-components";
import { useEffect, useContext } from "react";
import studentContext from "../../../components/Context/StudentContext";
// Ui
import {
  IoCalendarOutline,
  IoTimeOutline,
  IoBarChartOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";
// imgs png
import Alemania from "../../../assets/images/svgs/Alemania.png";
import Spain from "../../../assets/images/svgs/Spain.png";
import Rusia from "../../../assets/images/svgs/Rusia.png";
import KoreaImg from "../../../assets/images/svgs/Korea.png";
import Francia from "../../../assets/images/svgs/Francia.png";
import Inglaterra from "../../../assets/images/svgs/Inglaterra.png";
// import Infantil from "../../../../assets/images/ImageInfantil.jpg";
import Infantil from "../../../assets/images/ImageInfantil.jpg";
//
import French from "../../../assets/images/svgs/French.svg";
import English from "../../../assets/images/svgs/Inglaterra.svg";
import Spanish from "../../../assets/images/svgs/Espanish.svg";
import Ruso from "../../../assets/images/svgs/russia.svg";
import korea from "../../../assets/images/svgs/korea.svg";
import Germany from "../../../assets/images/svgs/germany.svg";
//

import { Temary } from "../../../components/Private/UserUI/Temary/Temary";

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
    case "German":
      return Alemania;
    case "Infantil":
      return Infantil;
    default:
      return English;
  }
};

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
    case "German":
      return Germany;

    default:
      return English;
  }
};
//
function FormatDate(date) {
  const dates = new Date(date);
  var year = dates.getFullYear();
  var month = dates.getMonth() + 1;
  var day = dates.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  return month + "/" + day + "/" + year;
}
//
export const UserPrivateNotId = () => {
  const contextStudent = useContext(studentContext);
  useEffect(() => {
    contextStudent.getStudent();
    // console.log(contextStudent.student.QueryStudent);
  }, []);

  return (
    <div className="container">
      <ContentTemary>
        {contextStudent.student?.QueryStudent && (
          <CardContent
            img={
              contextStudent.student?.QueryStudent.courses[0].kids
                ? imgFondo("Infantil")
                : imgFondo("English")
            }
          >
            <CardCourse>
              <ContentImage>
                <Img
                  url={imgs(
                    contextStudent.student?.QueryStudent.courses[0].idiom
                  )}
                  width="200px"
                  alt=""
                />
                <ItemsDeCompra flex style={{ width: "100%" }}></ItemsDeCompra>
              </ContentImage>
              <div>
                <CardHeader>
                  <span>
                    {contextStudent.student?.QueryStudent.courses[0].idiom}
                    {contextStudent.student?.QueryStudent.courses[0].kids &&
                      "(Kids)"}
                  </span>
                </CardHeader>
                <DatosDeCompra>
                  <ItemsDeCompra>
                    <IconTime />
                    <ItemContent>
                      Duration of each lesson:{" "}
                      {contextStudent.student?.QueryStudent.courses[0].time}
                      minutes
                      {/* Time de cada lessons: 40 min lessons */}
                    </ItemContent>
                  </ItemsDeCompra>
                  <ItemsDeCompra>
                    <IconNumberLessons />
                    <ItemContent>
                      Number of purchased lessons:{" "}
                      {contextStudent.student?.QueryStudent.courses[0].lesson}
                      {contextStudent.student?.QueryStudent.courses[0].lesson ==
                      1
                        ? " lesson"
                        : " lessons"}
                    </ItemContent>
                  </ItemsDeCompra>
                  <ItemsDeCompra>
                    <IconNumberLessons />
                    <ItemContent>
                      Number of remaining lessons:{" "}
                      {
                        contextStudent.student?.QueryStudent.courses[0]
                          .lessonTotal
                      }
                      {contextStudent.student?.QueryStudent.courses[0]
                        .lessonTotal == 1
                        ? " lesson"
                        : " lessons"}
                    </ItemContent>
                  </ItemsDeCompra>
                  <ItemsDeCompra>
                    <IconCalendar />
                    <ItemContent>
                      Lessons package expiration date:{" "}
                      {FormatDate(
                        contextStudent.student?.QueryStudent.courses[0]
                          .expiresCours
                      )}
                    </ItemContent>
                  </ItemsDeCompra>
                </DatosDeCompra>
              </div>
            </CardCourse>
          </CardContent>
        )}
        <Temary
          idiom={contextStudent.student?.QueryStudent.courses[0].idiom}
          kids={contextStudent.student?.QueryStudent.courses[0].kids}
          textSacramento={true}
        />
      </ContentTemary>
    </div>
  );
};

const SectionButton = styled.div`
  .button-primary {
  }
  .button-normal {
  }
`;

const ContentTemary = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 485px 1fr;
  column-gap: 5.8rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const CardContent = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 0.5rem;
  height: 100%;
  border-radius: 4px;
  position: relative;
  max-height: 175px;
`;

const ButtonNext = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  width: 25px;
  height: 25px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }
`;
const CardCourse = styled.div`
  display: grid;
  grid-template-columns: 120px 333px;
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
  height: 100%;
  @media (max-width: 768px) {
    width: 312px;
    font-size: 12px;
    grid-template-columns: max-content;
  }
`;

const ContentImage = styled.div`
  align-content: center;
  align-self: center;
  justify-self: center;
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
