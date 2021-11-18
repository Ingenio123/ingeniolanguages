import styled from "styled-components";
import HeaderStudent from "./UserUI/HeaderStudent/Header";
import { SlideShow } from "./UserUI/Banner";
import StudentState from "../../hooks/useStudent";

import IndexTemary from "./UserUI/Temary/IndexTemary";
import { ProviderTeachers } from "../Context/TeacherContext";

export default function Layout(props) {
  return (
    <StudentState>
      <ContainerLayout>
        <ProviderTeachers>
          <ContentFlex>
            <HeaderStudent />
            <IndexTemary />
          </ContentFlex>
        </ProviderTeachers>
        {props.children}
      </ContainerLayout>
    </StudentState>
  );
}

const ContainerLayout = styled.div``;
const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.3s ease all;
  height: 200px;
  max-height: 274px;
  position: relative;

  @media screen and (max-width: 768px) {
    max-width: 50%;
    & > div {
      width: 100%;
      height: 100%;
    }
  }
`;
const DivImg = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
`;

const ContentFlex = styled.div`
  display: flex;
  margin: 40px 48px;
`;
