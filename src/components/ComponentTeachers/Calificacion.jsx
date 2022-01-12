import styled from "styled-components";

export default function Calificacion({ data, setIdiom }) {
  const hanldeSelect = (e) => {
    setIdiom(e.target.value);
  };
  return (
    <>
      {data && data.length > 1 && (
        <Select onChange={(e) => hanldeSelect(e)}>
          {data.map((item) => (
            <option key={item._id} value={item.idiom}>
              {item.idiom}
            </option>
          ))}
        </Select>
      )}
      {data && data.length === 1 && (
        <>
          <Text>
            <Textbold> Idiom:</Textbold> {data[0].idiom}
          </Text>
          <Text>
            <Textbold>Number months:</Textbold> {data[0].NumberMonths}
          </Text>
          <Text>
            <Textbold>Time lesson:</Textbold> {data[0].TimeLossons}
          </Text>
          <Text>
            <Textbold>Plan Active:</Textbold> {data[0].lessonsTotal} class
          </Text>
          <Text>
            <Textbold>Cuanto le queda: </Textbold>
            {data[0].lessonsRestantes} class
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
