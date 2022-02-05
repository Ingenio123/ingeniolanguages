import styled from "styled-components";
//react
import { useState } from "react";
//data
import Data from "./data.json";
import Datakids from "./DataKids.json";
// components
import CardC from "../../components/prices/card";
import ModalC from "../../components/prices/Modal";
import BoxCart from "../../components/Boxcart/Boxcart";
const PricesPage = () => {
  const [ClickModal, setClickModal] = useState(false);
  const [Datas, setDatas] = useState({});
  const [ClickModalKids, setClickModalKids] = useState(false);
  const [DataKids, setDataKids] = useState({});
  return (
    <>
      <BoxCart />
      <Container className="container">
        <H2Styles top={true} className="text-center">
          Lesson packages
        </H2Styles>
        <ContentGrid bottom={true}>
          {Data.map((item) => (
            <CardC
              key={item._id}
              idiom={item.nameCourse}
              imgUrl={item.imgUrl}
              id={item._id}
              setClickModal={setClickModal}
              setData={setDatas}
            />
          ))}
        </ContentGrid>
        <H2Styles top={true} bottom={true} className="text-center">
          Lesson packages For Kids
        </H2Styles>
        <ContentGrid>
          {Datakids.map((item) => (
            <CardC
              key={item._id}
              idiom={item.nameCourse}
              imgUrl={item.imgUrl}
              id={item._id}
              setClickModal={setClickModalKids}
              setData={setDataKids}
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
        kids={false}
        id={Datas.id}
      />
      <ModalC
        Datas={DataKids}
        open={ClickModalKids}
        img={DataKids.imgUrl}
        nameCourse={DataKids.idiom}
        setClickModal={setClickModalKids}
        kids={true}
        id={DataKids.id}
      />
    </>
  );
};

const Container = styled.div``;
const ContentGrid = styled.section`
  margin: 0;
  margin-bottom: ${({ bottom }) => (bottom ? "1rem " : "0")};
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
  margin: 3rem 0;
  /* margin-top: ${({ top }) => (top ? "2rem" : "0")};
  margin-bottom: ${({ bottom }) => (bottom ? "2rem" : "0")} !important; */

  font-size: 2.5rem;
  /* border: 1px solid black; */
`;

export default PricesPage;
