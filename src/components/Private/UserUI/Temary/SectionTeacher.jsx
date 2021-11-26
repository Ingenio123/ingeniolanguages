import { useState, useContext, useEffect, useCallback } from "react";
import styled from "styled-components";
import ModalCalendar from "../ModalCalendar";
import Student from "../../../Context/StudentContext";
import ModalNotStudent from "./NotStudent";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Url from "../../../Urls";

function QueryLocation() {
  return new URLSearchParams(useLocation().search);
}
// { TeacherIdiom, idiom }
export default function SectionTeacher() {
  const studentContext = useContext(Student);
  const [showModal, setShowModal] = useState(false);
  const [notStudent, setNotStudent] = useState(false);
  const [state, setstate] = useState(false);
  const [ValorCalendar, setValorCalendar] = useState({});
  const [Data, setData] = useState(null);
  const [DataIdiom, setDataIdiom] = useState({
    data: [],
    idiom: null,
  });
  const query = QueryLocation();
  const OpenModal = () => {
    setShowModal((prev) => !prev);
  };
  const UserNotStudent = () => {
    setNotStudent((prev) => !prev);
  };
  const { idiom } = useSelector((state) => state.GetIdiomReducer);

  useEffect(() => {
    return setDataIdiom({
      data: idiom.datos,
      idiom: idiom.idiom,
    });
  }, [idiom]);
  // useEffect(() => {
  //   GetStudent();
  // }, []);

  // useEffect(() => {
  //   console.log(`${query.get("idiom")}`);
  //   const EndPoint = Url.url;
  //   const GetData = async () => {
  //     const res = await fetch(
  //       `${EndPoint}/data/courses?idiom=${query.get("idiom")}`
  //     );
  //     const data = await res.json();
  //     return setData(data);
  //   };
  //   GetData();
  // }, [query]);

  /*
  --------------------------------------------------------------------
                          useCallback(()=>{},[])
  --------------------------------------------------------------------
  */
  const valores = useCallback((param) => {
    // console.log(RecorreArray(studentContext.student.QueryStudent.courses));
    // da como resultado un numero int ->  entero  ===>  RecorreArray(student.QueryStudent.courses)
    // console.log(studentContext.student.QueryStudent.courses);
    function RecorreArray(param) {
      const datos = param.map((item, index) => {
        return item.TimeLossons;
      });
      return parseInt(datos[0].slice(0, 2));
    }
    const val = param.filter(
      (item) =>
        item.time === RecorreArray(studentContext.student.QueryStudent.courses)
    );
    setValorCalendar(val[0]);
  }, []);

  const ShowTypeModal = (param) => {
    if (studentContext.student) {
      valores(param);
      setstate(true);
      OpenModal();
      return;
    } else {
      setstate(false);
      UserNotStudent();
    }
  };

  return (
    <div>
      {state && (
        <ModalCalendar
          showModal={showModal}
          setShowModal={setShowModal}
          url_teacher={ValorCalendar.urlCalendar}
        />
      )}
      <ModalNotStudent setNotStudent={setNotStudent} notStudent={notStudent} />
      <TitleTeachers>Booking your {DataIdiom.idiom} lesson now</TitleTeachers>

      <ContentTeacherXl>
        {DataIdiom.idiom ? (
          <>
            {DataIdiom.data.map((item, index) => {
              return (
                <>
                  <ContentTeacher key={index}>
                    <Img src={item.img} />
                    <ContenTextTeacher>
                      <NombreTeacher>{item.firstName}</NombreTeacher>
                      <TextTeacher>{item.eslogan}</TextTeacher>
                      <ContentButton>
                        <ButtonAgendarClass
                          onClick={() => ShowTypeModal(item.calendar)}
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const ContentTeacher = styled.div`
  width: 100%;
  display: flex;
  background-color: #fff;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;

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
