import styled from "styled-components";

import Score from "react-score-indicator";

const ProgressComponent = ({ initialValor }, props) => {
  return (
    <Score
      lineWidth={10}
      value={initialValor}
      maxValue={100}
      lineGap={0}
      maxAngle={200}
      rotation={90}
      stepsColors={["#DC2626", "#FACC15", "#22C55E"]}
      textStyle={{ display: "none" }}
    />
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
