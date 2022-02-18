import Select from "react-select";
import { useState } from "react";
import styled from "styled-components";

// const options = [
//   { value: "A1.1", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];
const SendScore = ({ options }) => {
  //   const [State, setState] = useState(null);
  return (
    <>
      <SubLevel placeholder="Select SubLevel" options={options} />
      <Form>
        <h6>Add Score of exams</h6>
        <ContentInput>
          <Input type="text" placeholder="Input Score" />
          <ButtonSubmit type="submit">Submit</ButtonSubmit>
        </ContentInput>
      </Form>
    </>
  );
};

export default SendScore;

const SubLevel = styled(Select)`
  margin-bottom: 0.5rem;
`;

const Form = styled.form`
  margin-top: 1rem;
  border: 1px solid silver;
  width: 100%;
  padding: 1rem;
  display: block;
  h6 {
    text-align: center;
    font-size: 1.25rem;
    color: #18181b;
    line-height: normal;
    font-weight: 600;
    letter-spacing: -1px;
  }
`;
const ContentInput = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  padding: 0.3rem 0.5rem;
  border: 1px solid silver;
  border-radius: 4px;
`;

const ButtonSubmit = styled.button`
  padding: 0.5rem 0.8rem;
  border: none;
  background-color: #1d4ed8;
  color: #fff;
  line-height: normal;
  font-size: 1rem;
  border-radius: 4px;
  :hover {
    background-color: #2563eb;
  }
`;
