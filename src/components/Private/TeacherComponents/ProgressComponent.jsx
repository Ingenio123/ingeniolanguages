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
      stepsColors={["#49539c", "#525cad", "#636db6"]}
      textStyle={{ display: "none" }}
      width={350}
    />
  );
};
export default ProgressComponent;
