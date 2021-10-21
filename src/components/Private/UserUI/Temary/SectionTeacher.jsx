import { useState, useContext } from "react";
import styled from "styled-components";
import ModalCalendar from "../ModalCalendar";
import Student from "../../../Context/StudentContext";
import ModalNotStudent from "./NotStudent";

export default function SectionTeacher({ TeacherIdiom, idiom }) {
  const studentState = useContext(Student);
  const [showModal, setShowModal] = useState(false);
  const [notStudent, setNotStudent] = useState(false);

  const OpenModal = () => {
    setShowModal((prev) => !prev);
  };
  const UserNotStudent = () => {
    setNotStudent((prev) => !prev);
  };
  return (
    <div>
      <ContenGrid>
        <ModalCalendar
          showModal={showModal}
          setShowModal={setShowModal}
          url_teacher={
            "https://www.ingeniocalendar.com/libary%20m/30-min-lessons"
          }
        />
        <ModalNotStudent
          setNotStudent={setNotStudent}
          notStudent={notStudent}
        />
        <TitleTeachers>Booking your {idiom} lesson now</TitleTeachers>
        <ContentTeacherXl>
          {TeacherIdiom ? (
            <>
              {TeacherIdiom.map((item, index) => {
                return (
                  <>
                    <ContentTeacher key={index}>
                      <Img src={item.img} />
                      <ContenTextTeacher>
                        <NombreTeacher>{item.firstName}</NombreTeacher>
                        <TextTeacher>{item.eslogan}</TextTeacher>
                        <ContentButton>
                          <ButtonAgendarClass
                            onClick={() => {
                              studentState.student
                                ? OpenModal()
                                : UserNotStudent();
                            }}
                          >
                            Book a lesson with me
                          </ButtonAgendarClass>
                        </ContentButton>
                      </ContenTextTeacher>
                    </ContentTeacher>
                  </>
                );
              })}
            </>
          ) : (
            ""
          )}
        </ContentTeacherXl>
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

const ContentTeacherXl = styled.div`
  padding: 1rem;

  display: flex;
  flex-wrap: wrap;
`;
const ContenGrid = styled.div``;

const ContentTeacher = styled.div`
  width: 49%;
  display: flex;
  background-color: #fff;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  margin-left: 0.5rem;
  box-shadow: 0px 7px 15px -1px rgba(0, 0, 0, 0.18);
  -webkit-box-shadow: 0px 7px 15px -1px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: 0px 7px 15px -1px rgba(0, 0, 0, 0.18);
  @media screen and (max-width: 768px) {
    background-color: gray;
  }
`;
const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
const NombreTeacher = styled.span`
  font-size: 1.5rem;
  color: rgb(82, 82, 82);
  align-self: center;
  margin: 0;
  width: 100%;
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
  margin-top: auto;
  width: 100%;
`;
const ContentButton = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: auto;
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
  margin-top: auto;
  &:hover {
    background-color: rgb(67, 56, 202);
  }
`;
const TitleTeachers = styled.h2`
  color: rgb(82, 82, 82);
  text-align: center;

  line-height: 3.5rem;
  margin-bottom: 1rem;
  margin-top: 18px;
`;
