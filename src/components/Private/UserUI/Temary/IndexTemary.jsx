import styled from "styled-components";
import { Temary } from "./Temary";
import SectionTeacher from "../Temary/SectionTeacher";
import axios from "axios";
import Url from "../../../Urls";
import { useEffect, useState } from "react";

export default function IndexTemary() {
  const [TeacherIdiom, setTeacherIdiom] = useState([]);
  useEffect(() => {
    GetTeacherIdiom();
  }, []);

  const GetTeacherIdiom = async () => {
    const Enpoint = Url.url + "/data/courses/6146057270fdf50618a47446";
    const res = await axios.get(Enpoint);
    // console.log("estos son los datos", res.data.datos);
    setTeacherIdiom(res.data.datos);
  };
  return (
    <Container>
      <GridLayout>
        <Temary />
        <ColumGrid>
          <SectionTeacher TeacherIdiom={TeacherIdiom} />
        </ColumGrid>
      </GridLayout>
    </Container>
  );
}
const Container = styled.div`
  background: #f1f5f9;
  margin-left: 70px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;
const GridLayout = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  @media (max-width: 768px) {
    column-gap: 0px;
    grid-template-columns: 100%;
  }
`;
const ColumGrid = styled.aside`
  padding: 0 0.5rem;
  border-radius: 5px;
  background-color: #f1f5f9;
`;
