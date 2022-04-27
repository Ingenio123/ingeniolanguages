// import {} from "react";
import styled from "styled-components";
import Props from "prop-types";

const ContainerRelative = styled.div`
  position: relative;
  max-width: ${({ max }) => `${max}px`};
  width: 100%;
`;

const Container = styled.div`
  max-width: 100%;
  width: 100%;
  overflow-x: scroll;
  display: flex;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  .buttons {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    width: 100%;
    button {
      background: #0000004e;
      border: none;
      padding: 8px 12px;
      cursor: pointer;
    }
    .prev {
      transform: translateX(10px);
    }
    .next {
      transform: translateX(-10px);
    }
  }
`;

const Carousel = () => {
  return <></>;
};

Carousel.prototype = {};
