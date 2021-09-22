import { useState } from "react";
import styled from "styled-components";
import ModalCalendar from "../ModalCalendar";
export default function SectionTeacher({ TeacherIdiom }) {
  const [showModal, setShowModal] = useState(false);
  const OpenModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div>
      <ContenGrid>
        <ModalCalendar showModal={showModal} setShowModal={setShowModal} />
        <TitleTeachers>Spanish teachers</TitleTeachers>
        {TeacherIdiom.map((item, index) => {
          return (
            <>
              <ContentTeacher key={index}>
                <Img src={item.img} />
                <ContenTextTeacher>
                  <NombreTeacher>{item.firstName}</NombreTeacher>
                  <TextTeacher>{item.eslogan}</TextTeacher>
                  <ContentButton>
                    <ButtonAgendarClass onClick={OpenModal}>
                      Book a lesson with me
                    </ButtonAgendarClass>
                  </ContentButton>
                </ContenTextTeacher>
              </ContentTeacher>
            </>
          );
        })}
      </ContenGrid>
      {/* <ContentCalendar
        src="https://www.ingeniocalendar.com/luis/reunion"
        frameborder="0"
        allowfullscreen
      ></ContentCalendar> */}
    </div>
  );
}

const ContentCalendar = styled.iframe`
  width: 100%;
  height: 50vh;
  border: none;
`;

const ContenGrid = styled.div``;
const HeaderContentGrid = styled.div`
  h3 {
    color: rgb(82, 82, 91);
    margin: 0;
    text-align: center;
    margin-top: 0.5rem;
    font-size: 1.8rem;
  }
  /* border: 2px solid red; */
`;
const ContentTeacher = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: 0px 7px 15px -1px rgba(0, 0, 0, 0.18);
  -webkit-box-shadow: 0px 7px 15px -1px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: 0px 7px 15px -1px rgba(0, 0, 0, 0.18);
`;
const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  align-self: flex-start;
`;
const NombreTeacher = styled.span`
  font-size: 1.5rem;
  color: rgb(82, 82, 82);
  align-self: flex-start;
  margin: 0;
`;
const TextTeacher = styled.p`
  margin: 0;
  color: rgb(113, 113, 122);
  line-height: 1.2;
  margin-bottom: 0.5rem;
`;
const ContenTextTeacher = styled.div`
  margin: 0;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  width: 100%;
`;
const ContentButton = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  /* border: 1px solid red; */
`;

const ButtonAgendarClass = styled.button`
  background: rgb(79, 70, 229);
  color: #fff;
  border: none;
  outline: none;
  padding: 0.2rem 1rem;
  font-size: 1rem;
  border-radius: 4px;
  &:hover {
    background-color: rgb(67, 56, 202);
  }
`;
const TitleTeachers = styled.h2`
  color: rgb(82, 82, 82);

  line-height: 3.5rem;
  margin-bottom: 1rem;
  margin-top: 18px;
`;
