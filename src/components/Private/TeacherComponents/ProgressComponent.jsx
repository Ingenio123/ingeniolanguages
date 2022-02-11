import styled from "styled-components";
import { BsPlusCircleFill } from "react-icons/bs";
import Score from "react-score-indicator";
import { useState } from "react";

const ProgressComponent = () => {
  const initalState = 0;
  const [state, setValor] = useState(initalState);

  return (
    <>
      <Score
        lineWidth={10}
        value={65}
        maxValue={100}
        lineGap={0}
        maxAngle={200}
        rotation={90}
        stepsColors={["#DC2626", "#FACC15", "#22C55E"]}
        textStyle={{ display: "none" }}
      />
      <Text>A1.1</Text>
      <ButtonPlus>
        <BsPlusCircleFill size={"1.5rem"} />
      </ButtonPlus>
    </>
  );
};
export default ProgressComponent;

const ButtonPlus = styled.button`
  padding: 0.25rem;
  border: none;
  background-color: #2563eb;
  color: #fff;
  border-radius: 50%;
  position: absolute;
  bottom: 40px;
  :active {
    transform: scale(0.9);
  }
`;

const Text = styled.h2`
  position: absolute;
  bottom: 70px;
  margin: 0;
  color: #2563eb;
`;
