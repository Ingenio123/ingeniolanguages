import styled from "styled-components";
import HeaderStudent from "./UserUI/HeaderStudent/Header";
import { SlideShow } from "./UserUI/Banner";

import Banner1 from "../../assets/images/Banner1.png";
export default function Layout(props) {
  return (
    <ContainerLayout>
      <SlideShow>
        <Slide>
          <img src={Banner1} alt="img" />
        </Slide>
      </SlideShow>
      <HeaderStudent />
      {props.children}
    </ContainerLayout>
  );
}

const ContainerLayout = styled.div`
  position: absolute;
  top: -5px;
  z-index: -1;
`;
const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.3s ease all;
  height: 200px;
  max-height: 274px;
  position: relative;
  img {
    width: 100%;
    vertical-align: top;
    height: 100%;
  }
`;
