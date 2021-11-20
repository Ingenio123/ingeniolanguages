import styled from "styled-components";

export default function Calificacion({ data }) {
  console.log(data);
  return (
    <>
      {data && data.length > 1 && (
        <Select>
          {data.map((item) => (
            <option key={item._id} value={item.idiom}>
              {item.idiom}
            </option>
          ))}
        </Select>
      )}
      {data && data.length === 1 && (
        <>
          <p>Idiom: {data[0].idiom} </p>
          <p>Number months: {data[0].NumberMonths} </p>
          <p>Time lesson: {data[0].TimeLossons} </p>
          <p>Plan Active: {data[0].lessonsTotal} class </p>
          <p>Cuanto le queda: {data[0].lessonsRestantes} class</p>
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
