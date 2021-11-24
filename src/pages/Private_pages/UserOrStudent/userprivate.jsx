import React from "react";
import styled from "styled-components";
import CardLists from "../../../components/Private/UserUI/HeaderStudent/Header";
import { ProviderTeachers } from "../../../components/Context/TeacherContext";
import { Temary } from "../../../components/Private/UserUI/Temary/Temary";
export default function UserPrivate({ children }) {
  return (
    <Container>
      {/* <CardList></CardList> */}
      <ProviderTeachers>
        <ContentTemary>
          <CardLists />
          <Temary />
        </ContentTemary>
      </ProviderTeachers>
    </Container>
  );
}

const Container = styled.main`
  margin: 0 3rem;

  max-width: 1272px;
  @media screen and (max-width: 768px) {
    margin: 0 3rem;
  }
`;
const ContentTemary = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

// const CardList = styled.div`
//   width: 50%;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   border: 1px solid red;
// `;
