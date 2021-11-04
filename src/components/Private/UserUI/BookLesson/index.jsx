import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SectionTeachersCard from "../Temary/SectionTeacher";
import URI from "../../../Urls";
import styled from "styled-components";

export default function Index() {
  const query = QueryLocation();
  const [Datas, setDatas] = useState(null);
  const hanleTeachers = async () => {
    const Endpoint = URI.url;
    const res = await fetch(
      `${Endpoint}/data/courses?idiom=${query.get("idiom")}`
    );
    const data = await res.json();
    console.log(data);
    setDatas(data.datos);
  };
  useEffect(() => {
    hanleTeachers();
  }, []);

  return (
    <Content>
      <SectionTeachersCard idiom={query.get("idiom")} TeacherIdiom={Datas} />
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
