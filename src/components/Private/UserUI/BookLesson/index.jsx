import { useEffect, useState, useContext, useCallback } from "react";
import { useLocation } from "react-router-dom";
import SectionTeachersCard from "../Temary/SectionTeacher";
import URI from "../../../Urls";
import styled from "styled-components";
// getStudent  context
import Student from "../../../Context/StudentContext";
// import NavbarContext from "../../../../context/NavbarContext";
import NavbarState from "../../../../context/NavbarContext";

export default function Index() {
  const [Datas, setDatas] = useState(null);
  const studentContext = useContext(Student);
  // const GetIdiom = useCallback(async () => {
  //   const Endpoint = URI.url;
  //   const res = await fetch(
  //     `${Endpoint}/data/courses?idiom=${query.get("idiom")}`
  //   );
  //   const data = await res.json();
  //   console.log(`Get item: ${query.get("idiom")}`);
  //   return setDatas(data.datos);
  // }, []);

  // useEffect(() => {
  //   const getIdiom = async () => {
  //     const Endpoint = URI.url;
  //     const res = await fetch(
  //       `${Endpoint}/data/courses?idiom=${query.get("idiom")}`
  //     );
  //     const data = await res.json();
  //     console.log(`Get item: ${query.get("idiom")}`);
  //     return setDatas(data.datos);
  //   };
  //   getIdiom();
  // }, [getIdiom]);

  // const hanleTeachers = useCallback(async () => {
  //   const Endpoint = URI.url;
  //   const res = await fetch(
  //     `${Endpoint}/data/courses?idiom=${query.get("idiom")}`
  //   );
  //   const data = await res.json();
  //   // console.log("Data idiom:", data);
  //   setDatas(data.datos);
  // }, [query]);

  async function GetStudent() {
    await studentContext.getStudent();
  }

  useEffect(() => {
    GetStudent();
  }, []);

  // useEffect(() => {
  //   GetIdiom();
  // }, [GetIdiom]);

  return (
    <Content>
      <SectionTeachersCard
        idiom={"English"}
        TeacherIdiom={Datas}
        student={studentContext.student}
      />
    </Content>
  );
}

function QueryLocation() {
  return new URLSearchParams(useLocation().search);
}

const Content = styled.section`
  display: grid;
  grid-template-columns: 848px 1fr;
  margin: 0 50px;
`;
