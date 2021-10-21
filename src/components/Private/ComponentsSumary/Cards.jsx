import styled, { css } from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { HiOutlineViewGridAdd } from "react-icons/hi";

export default function Cards(props) {
  return (
    <>
      <Card color={props.color} border={props.border}>
        <CardCol>
          <Card_text>{props.idiom}</Card_text>
          <Text_base> Lorem ipsum dolor sit.</Text_base>
          <ButtonSumary textColor={props.textColor} primary={props.primary}>
            <Icon />
            Sumary
          </ButtonSumary>
        </CardCol>
        <Card_Spinner>
          <CircularProgressbar
            styles={{
              // Customize the root svg element
              root: {},
              path: {
                // Path color
                stroke: `#000`,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",
                // Customize transition animation
                transition: "stroke-dashoffset 0.5s ease 0s",
                // Rotate the path
                transform: "rotate(0.turn)",
                transformOrigin: "center center",
              },

              // Customize the circle behind the path, i.e. the "total progress"
              trail: {
                // Trail color
                stroke: false,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "round",
                // Rotate the trail
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",
              },
              // Customize the text
              text: {
                // Text color
                fill: "#000",
                // Text size
                fontSize: "20px",
              },
              // Customize background - only used when the `background` prop is true
            }}
            strokeWidth="8"
            value={props.porcentaje}
            text={`${props.porcentaje}%`}
            background={false}
          />
        </Card_Spinner>
      </Card>
    </>
  );
}
const Text_md = css`
  color: black;
  font-size: 2rem;
  font-weight: 700;
`;
const Text_sm = css`
  font-size: 1.3rem;
  color: rgb(113, 113, 122);
  letter-spacing: -0.055em;
`;
const Text_lg = css`
  color: black;
  font-size: 1rem;
  font-weight: 700;
`;

const Card = styled.div`
  position: relative;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => (props.color ? props.color : "#FAE8FF")};
  border-radius: 10px;
  max-width: 325px;
  justify-content: start;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
  border: ${(props) => (props.border ? `1px solid ${props.border}` : "none")};
`;

const CardCol = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Card_text = styled.h6`
  ${Text_md};
  letter-spacing: -0.055em;
  margin: 0;
`;
const Text_base = styled.span`
  ${Text_sm};
`;

const Card_Spinner = styled.div`
  height: 80px;
  width: 80px;
  margin-left: 20px;
`;
const Icon = styled(HiOutlineViewGridAdd)`
  color: white;
  font-size: 1.2rem;
`;
const ButtonSumary = styled.button`
  width: 60%;
  padding: 0.5rem 0.5rem;
  color: white;
  border: none;
  border-radius: 4px;
  min-width: 64px;
  max-height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1rem;
  line-height: 1;
  font-weight: 500;
  background-color: ${(props) => props.textColor};
  transition: all 0.3s ease;
  :hover {
    background-color: ${(props) => props.primary};
  }
`;
