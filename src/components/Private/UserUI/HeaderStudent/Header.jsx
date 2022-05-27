import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { ComponentButtons } from "../../../Buttons/ButtonLessonPackage";
import { useDispatch } from "react-redux";

// Ui
import {
  IoCalendarOutline,
  IoTimeOutline,
  IoBarChartOutline,
  IoDocumentTextOutline,
  IoAlertCircleOutline,
  IoCartOutline,
} from "react-icons/io5";

import { FaCartPlus } from "react-icons/fa";
import studentContext from "../../../Context/StudentContext";
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
import Infantil from "../../../../assets/images/ImageInfantil.jpg";

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

export default function Header({ course }) {
  const contextStudent = useContext(studentContext);
  const dispatch = useDispatch();
  const history = useHistory();
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
  const handleClickRenewPackage = () => {
    console.log(course);
    let { idiom, lesson, kids, months, time } = course;
    console.log(idiom, lesson, kids, months, time);
    time = parseInt(time);
    let pricesTime = time === 30 ? 15 : time === 45 ? 22.5 : 30;
    let id = idiom == "English" ? 12 : "";
    let calculo = pricesTime * lesson;
    calculo = calculo * months;
    let image =
      idiom == "English"
        ? "https://res.cloudinary.com/ingenio/image/upload/v1643997592/WhatsApp_Image_2022-02-04_at_12.47.34_gllinv.jpg"
        : idiom == "Spanish"
        ? "https://res.cloudinary.com/ingenio/image/upload/v1643997515/WhatsApp_Image_2022-02-04_at_11.13.46_ju3ays.jpg"
        : "";
    dispatch({
      type: "PRICE_LESSON",
      payload: {
        idiom,
        lesson,
        kids,
        months,
        time,
        price: calculo,
        id,
        img: image,
      },
    });
    history.push("/orderSummary");
  };
  return (
    <ContentCards>
      <>
        {contextStudent.student !== null && !contextStudent.loading ? (
          <>
            <CardContent
              img={
                course?.kids ? imgFondo("Infantil") : imgFondo(course?.idiom)
              }
            >
              <CardCourse>
                <ContentImage>
                  <Img url={imgs(course?.idiom)} width="200px" alt="" />
                  <ItemsDeCompra flex style={{ width: "100%" }}></ItemsDeCompra>
                </ContentImage>
                <div>
                  <CardHeader>
                    <span>
                      {course?.idiom} {course?.kids && "(Kids)"}
                    </span>
                  </CardHeader>
                  <DatosDeCompra>
                    <ItemsDeCompra>
                      <IconTime />
                      <ItemContent>
                        Duration of each lesson: {course?.time} minutes
                        {/* Time de cada lessons: 40 min lessons */}
                      </ItemContent>
                    </ItemsDeCompra>
                    <ItemsDeCompra>
                      <PurchaseIcon />
                      <ItemContent>
                        Number of purchased lessons: {course?.lesson}
                        {course?.lesson === "1" ? " lesson" : " lessons"}
                      </ItemContent>
                    </ItemsDeCompra>
                    <ItemsDeCompra>
                      <AlertIcons />
                      <ItemContent>
                        Number of remaining lessons: {course?.lessonTotal}
                        {course?.lesson === 1 ? " lesson" : " lessons"}
                      </ItemContent>
                    </ItemsDeCompra>
                    <ItemsDeCompra>
                      <IconCalendar />
                      <ItemContent>
                        Lessons package expiration date:{" "}
                        {FormatDate(course?.expiresCours)}
                      </ItemContent>
                    </ItemsDeCompra>
                  </DatosDeCompra>
                </div>
              </CardCourse>
            </CardContent>
            <CardExpired>
              <ButtonStyled bg="#ff3946" onClick={handleClickRenewPackage}>
                Renew my current lessons package
              </ButtonStyled>
              <TextOr>or</TextOr>
              <LinkText to="/prices">
                Change my current lessons package
              </LinkText>
            </CardExpired>
            {/* {course?.ExpiresCourse && (
            )} */}
          </>
        ) : (
          // not student down
          <>
            {!contextStudent.loading && (
              <>
                <CardContent img={imgFondo(course[0].idiom)}>
                  <CardCourse>
                    <ContentImage>
                      <Img url={imgs(course[0].idiom)} alt="" width="200px" />
                      <ItemsDeCompra
                        flex
                        style={{ width: "100%" }}
                      ></ItemsDeCompra>
                    </ContentImage>
                    <div>
                      <CardHeader>
                        <span>{course[0].idiom}</span>
                        {/* <BuyNewCourse onClick={Home} title="Buy a now package" /> */}
                      </CardHeader>
                      <DatosDeCompra>
                        <ItemsDeCompra>
                          <IconTime />
                          <ItemContent>
                            Duration of each lesson: {course[0].timeLesson}
                            {/* Time de cada lessons: 40 min lessons */}
                          </ItemContent>
                        </ItemsDeCompra>

                        <ItemsDeCompra>
                          <PurchaseIcon />
                          <ItemContent>
                            Number of purchased lessons: 0 lessons
                          </ItemContent>
                        </ItemsDeCompra>
                        <ItemsDeCompra>
                          <IconNumberLessons />
                          <ItemContent>
                            Number of remaining lessons: {course[0].lessonTotal}
                          </ItemContent>
                        </ItemsDeCompra>
                        <ItemsDeCompra>
                          <IconCalendar />
                          <ItemContent>
                            Lessons package expiration: 00/00/00
                          </ItemContent>
                        </ItemsDeCompra>
                      </DatosDeCompra>
                    </div>
                  </CardCourse>
                </CardContent>
              </>
            )}
            {/* end */}
            <ComponentButtons />
          </>
        )}
      </>
    </ContentCards>
  );
}
const TextOr = styled.span`
  font-size: 1rem;
  color: #364d92;
  font-weight: 700;
`;
// const Icons = styled(BiChevronRight)`
//   font-size:
// `;
const CardExpired = styled.section`
  /* border: 1px solid black; */
  padding: 0 0.5rem;
  width: 100%;
  height: auto;
  color: #fff;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Button = css`
  border-radius: 30px;
  font-weight: 700;
  color: inherit;
  background-color: ${(props) => (props.bg ? props.bg : "#4299e1")};
  padding: 0.5rem 1rem;
  line-height: 26px;
  display: inline-block;
  max-width: 350px;
  border: 3px solid #ff3946;
`;

const ButtonStyled = styled.button`
  ${Button};
  transition: all 0.3s ease;

  :hover {
    background-color: transparent;
    border: 3px solid #ff3946;
    color: #364d92;
  }
`;

const LinkText = styled(Link)`
  font-size: 1rem;
  color: #364d92;
  opacity: 1;
  font-weight: 700;
  :hover {
    color: #ff3946;
  }
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

const ContentCards = styled.div`
  width: 490px;
  row-gap: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;
const ContentCard = styled.div`
  display: flex;
  overflow: auto;
  height: 147px;
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
const AlertIcons = styled(IoAlertCircleOutline)`
  ${StyleIcon};
`;

const PurchaseIcon = styled(IoCartOutline)`
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
