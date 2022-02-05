import styled from "styled-components";

export default function Calificacion({ data, setIdiom, handleSelect }) {
  const hanldeSelect = (e) => {
    console.log(e.target.value);
    setIdiom(e.target.value);
    handleSelect(e.target.value);
  };
  return (
    <>
      {data && data.length > 1 && (
        <Select onChange={(e) => hanldeSelect(e)}>
          {data.map((item) => (
            <option key={item._id} value={item._id}>
              {item.idiom} {item.kids && " (Kids)"}
            </option>
          ))}
        </Select>
      )}
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
    </>
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
