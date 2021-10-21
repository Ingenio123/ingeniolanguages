import styled from "styled-components";
import { Temary } from "./Temary";
import SectionTeacher from "../Temary/SectionTeacher";
import axios from "axios";
import Url from "../../../Urls";
import { useEffect, useState } from "react";
import useTeacher from "../../../../hooks/useTeachers";

export default function IndexTemary() {
  const [TeacherIdiom, setTeacherIdiom] = useState([]);
  const { Teachers, idIdiom } = useTeacher();

  return (
    <Container>
      <GridLayout>
        <SectionTeacher idiom={idIdiom} TeacherIdiom={Teachers} />
        <ColumGrid>{/* <Temary /> */}</ColumGrid>
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
  grid-template-columns: 957px 323px;
  column-gap: 0.5rem;
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
