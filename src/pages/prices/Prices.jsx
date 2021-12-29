import styled from "styled-components";
//react
import { useState } from "react";
//data
import Data from "./data.json";
// components
import CardC from "../../components/prices/card";
import ModalC from "../../components/prices/Modal";
const PricesPage = () => {
  const [ClickModal, setClickModal] = useState(true);
  return (
    <>
      <Container className="container">
        <ContentGrid>
          {Data.map((item) => (
            <CardC
              key={item._id}
              idiom={item.nameCourse}
              imgUrl={item.imgUrl}
            />
          ))}
        </ContentGrid>
      </Container>
      <ModalC
        open={ClickModal}
        img="https://proyectoviajero.com/wp-content/uploads/2021/05/plaza-roja-moscu.jpg"
        nameCourse="Russian"
      />
    </>
  );
};

const Container = styled.div``;
const ContentGrid = styled.section`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export default PricesPage;
