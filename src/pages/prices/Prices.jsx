import styled from "styled-components";
//react
import { useState } from "react";
//data
import Data from "./data.json";
// components
import CardC from "../../components/prices/card";
import ModalC from "../../components/prices/Modal";
import BoxCart from "../../components/Boxcart/Boxcart";
const PricesPage = () => {
  const [ClickModal, setClickModal] = useState(false);
  const [Datas, setDatas] = useState({});
  return (
    <>
      <BoxCart />
      <Container className="container">
        <H2Styles className="text-center">Lesson packages</H2Styles>
        <ContentGrid>
          {Data.map((item) => (
            <CardC
              key={item._id}
              idiom={item.nameCourse}
              imgUrl={item.imgUrl}
              setClickModal={setClickModal}
              setData={setDatas}
            />
          ))}
        </ContentGrid>
      </Container>
      <ModalC
        Datas={Datas}
        open={ClickModal}
        img={Datas.imgUrl}
        nameCourse={Datas.idiom}
        setClickModal={setClickModal}
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

const H2Styles = styled.h2`
  margin: 0;
`;

export default PricesPage;
