import styled, { css, keyframes } from "styled-components";

export default function HeaderStudent() {
  return (
    <Card>
      <CardGrid>
        <div>
          <CardHeader>
            <ContentLine>
              <Name></Name>
            </ContentLine>
            <CircleShop></CircleShop>
          </CardHeader>
          <Description>
            <ContentLine>
              <DescriptionCircle></DescriptionCircle>
              <Line width="15"></Line>
            </ContentLine>
            <ContentLine>
              <DescriptionCircle></DescriptionCircle>
              <Line width="20"></Line>
            </ContentLine>
            <ContentLine>
              <DescriptionCircle></DescriptionCircle>
              <Line width="10"></Line>
            </ContentLine>
            <ContentLine>
              <DescriptionCircle></DescriptionCircle>
              <Line width="50"></Line>
            </ContentLine>
          </Description>
          <CardButtons>
            <DescriptionCircle></DescriptionCircle>
            <Button left="5"></Button>
            <Button width="20%" left="20"></Button>
          </CardButtons>
        </div>
        <CardImg></CardImg>
      </CardGrid>
    </Card>
  );
}

const shimmer = keyframes`
   0%{
    background-position: -450px 0;
  }
  100%{
    background-position: 450px 0;
  }
`;

const Beffore = css`
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    to right,
    #d9d9d9 0%,
    rgba(0, 0, 0, 0.05) 20%,
    #d9d9d9 40%,
    #d9d9d9 100%
  );
  background-repeat: no-repeat;
  background-size: 450px 400px;
  animation: ${shimmer} 1s linear infinite;
`;

const Card = styled.div`
  max-width: 703px;
  width: 100%;
  background: #fff;
  padding: 10px 1rem;
  border-radius: 5px;
`;
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 4px;
`;
const CardHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const CardImg = styled.div`
  justify-self: flex-end;
  position: relative;
  height: 100%;
  width: 100%;
  background: #d9d9d9;
  overflow: hidden;
  &::before {
    ${Beffore};
  }
`;

const Name = styled.span`
  border-radius: 10px;
  position: relative;
  height: 20px;
  width: 70px;
  background: #d9d9d9;
  overflow: hidden;
  &::before {
    ${Beffore};
  }
`;

const DescriptionLine = css`
  background: #d9d9d9;
  border-radius: 10px;
  height: 18px;
  margin: 10px 0;
  overflow: hidden;
  position: relative;
  margin-left: 4px;
`;
const Description = styled.div`
  margin: 25px 0;
`;

const ContentLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.between ? "space-between" : "flex-start"};
`;
const CircleShop = styled.div`
  justify-self: flex-end;
  align-self: center;
  background: #d9d9d9;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  overflow: hidden;
  position: relative;

  ::before {
    ${Beffore};
  }
`;
const DescriptionCircle = styled.div`
  background: #d9d9d9;
  border-radius: 50%;
  height: 18px;
  width: 18px;
  overflow: hidden;
  position: relative;

  ::before {
    ${Beffore};
  }
`;
const Line = styled.div`
  ${DescriptionLine};
  width: ${(props) => `calc(100% - ${props.width}%)`};
  &::before {
    ${Beffore};
  }
`;
const CardButtons = styled.div`
  display: flex;
`;
const Btns = css`
  height: 20px;

  background: #d9d9d9;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
`;

const Button = styled.div`
  ${Btns};
  width: ${(props) => (props.width ? props.width : "50%")};
  margin-right: ${(props) => (props.right ? `${props.right}px` : 0)};
  margin-left: ${(props) => (props.left ? `${props.left}px` : 0)};
  &::before {
    ${Beffore};
  }
  &::before {
    animation-delay: 0.22s;
  }
`;
