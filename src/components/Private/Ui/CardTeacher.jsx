import styled from "styled-components";

export default function CardTeacher() {
  return (
    <CardOneTeacher>
      <ContentFlex>
        <CircleImg></CircleImg>
        <ContentText>
          <TextTitle></TextTitle>
        </ContentText>
      </ContentFlex>
    </CardOneTeacher>
  );
}

const Background = {
  background_color: "#d9d9d9",
};

const CardOneTeacher = styled.div`
  max-width: 612px;
  width: 100%;
  background-color: #ffff;
  border: 1px solid silver;
`;
const ContentFlex = styled.div`
  display: flex;
`;
const CircleImg = styled.div`
  width: 50px;
  height: 50px;
`;
const ContentText = styled.div``;
const TextTitle = styled.div`
  ${Background};
`;
