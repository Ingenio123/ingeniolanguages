import React from "react";
import styled from "styled-components";
import CardLists from "../../../components/Private/UserUI/HeaderStudent/Header";

import { Temary } from "../../../components/Private/UserUI/Temary/Temary";
import ContexCardIdiomProvider from "../../../context/CardIdiomContext";
export default function UserPrivate({ children }) {
  return (
    <Container>
      <ContentTemary>
        <ContexCardIdiomProvider>
          <CardLists />
          <Temary />
        </ContexCardIdiomProvider>
      </ContentTemary>
    </Container>
  );
}

const Container = styled.main`
  margin: 3rem 3rem;

  max-width: 1272px;
  @media screen and (max-width: 768px) {
    margin: 0 3rem;
  }
`;
const ContentTemary = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 485px 1fr;
  column-gap: 5.8rem;
`;

// const CardList = styled.div`
//   width: 50%;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   border: 1px solid red;
// `;
