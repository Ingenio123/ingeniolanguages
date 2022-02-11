import styled from "styled-components";
import { ShowData } from "./ShowData";

export default function Calificacion({ data, setIdiom, handleSelect, datos }) {
  const hanldeSelect = (e) => {
    console.log(e.target.value);
    setIdiom(e.target.value);
    handleSelect(e.target.value);
  };
  return (
    <div>
      {data && data.length > 1 && (
        <Select onChange={(e) => hanldeSelect(e)}>
          {data.map((item) => (
            <option key={item._id} value={item._id}>
              {item.idiom} {item.kids && " (Kids)"}
            </option>
          ))}
        </Select>
      )}
      {/* <ShowData data={datos} /> */}

      {data && data.length === 1 && (
        <>
          <Text>
            <Textbold> Language:</Textbold> {data[0].idiom}
          </Text>
          <Text>
            <Textbold>Number of months:</Textbold>{" "}
            {data[0].months > 1
              ? data[0].months + " months"
              : data[0].months + " month"}
          </Text>
          <Text>
            <Textbold>Duration of each lesson:</Textbold> {data[0].time} minutes
          </Text>
          <Text>
            <Textbold>Active plan: {data[0].lesson} </Textbold> lessons
          </Text>
          <Text>
            <Textbold>Remaining lessons: </Textbold>
            {data[0].lessonTotal} lessons
          </Text>
        </>
      )}
    </div>
  );
}

const Select = styled.select`
  border: 1px solid silver;
  padding: 0.5rem 0.3rem;
  width: 100%;

  option {
    color: #314584;
  }
`;

const Text = styled.p`
  margin: 0;
  color: #314584;
  line-height: normal;
  margin-bottom: 0.5rem;
`;
const Textbold = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: #314584;
  line-height: normal;
`;
const ItemsCard = styled.div`
  width: 100%;
  display: ${(props) => (props.block ? "block" : "flex")};
  justify-content: ${(props) => (props.start ? "flex-start" : "end")};
  align-items: center;
  padding: 10px;
  padding-bottom: 0;
  border: 1px solid red;
  & > p {
    margin: 0;
    border: ${(props) => (props.border ? "1px solid black" : "none")};
    line-height: 1;
    padding: 0.4rem 0;
    color: #314584;
  }
`;
const ResumenLabel = styled.label`
  font-size: 1rem;
  font-weight: 600;
  font-size: 1.1rem;
`;
const TextLarge = styled.textarea`
  background: transparent;
  color: #314584;
  border: 1px solid rgba(49, 69, 132, 0.6);
  outline: none;
  resize: none;
  padding: 5px;
  width: 100%;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.1;
  &:focus {
    border: 1px solid #00a1f1;
  }

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px gray;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #314584;
  }
`;
