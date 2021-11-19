import styled from "styled-components";
import React from "react";
import { useSelector } from "react-redux";
import {
  IoCubeOutline,
  IoCartOutline,
  IoCheckmarkSharp,
  IoCardOutline,
} from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

export default function ProgressStetpBar() {
  const step = useSelector((state) => state.stepProgress);

  return (
    <Centrador>
      <ContainerProgress>
        <Progress style={{ width: `${step.avance}` }}></Progress>
        <Circle active={true} title="Select your package">
          <IoCubeOutline />
        </Circle>
        <Circle active={step.cart} title="Add  to cart">
          <IoCartOutline />
        </Circle>
        <Circle active={step.address} title="Address">
          <MdLocationOn />
        </Circle>
        <Circle active={step.card} title="Card">
          <IoCardOutline />
        </Circle>
        <Circle active={step.succes} title="Success">
          <IoCheckmarkSharp />
        </Circle>
      </ContainerProgress>
    </Centrador>
  );
}

const Centrador = styled.div`
  width: 100%;
  grid-column: 1 / span 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerProgress = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  max-width: 100%;
  width: 350px;
  &::before {
    content: "";
    background-color: #e4e4e7;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 2px;
    width: 100%;
    z-index: 1;
  }
`;
const Progress = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 2px;
  z-index: 1;
  transition: 0.4s ease;
  background-color: #283593;
`;
const Circle = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border: ${(props) =>
    props.active ? "2px solid #283593" : "1px solid silver"};
  border-radius: 50%;
  transition: 0.4s ease;
  color: ${(props) => (props.active ? " #283593" : " silver")};
  background: white;
  z-index: 999;
`;
