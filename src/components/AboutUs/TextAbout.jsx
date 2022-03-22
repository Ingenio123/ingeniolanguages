import styled from "styled-components";

export const TextAbout = ({ text }) => {
  return (
    <div>
      {/* <TextTitle>Text Title</TextTitle> */}
      <TextParrafo>{text}</TextParrafo>
    </div>
  );
};

const TextTitle = styled.h6`
  font-size: 2rem;
  color: #18181b;
  margin: 0;
  letter-spacing: -2px;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

const TextParrafo = styled.p`
  color: #18181b;
  line-height: 1.3;
  font-size: 1.2rem;
  margin-left: 1rem;
  text-align: justify;
`;
