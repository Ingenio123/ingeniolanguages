import styled, { css } from "styled-components";
import { BiChevronUp } from "react-icons/bi";
import { useState } from "react";

export default function CardFeedBack() {
  const [Click, setClick] = useState(false);

  const toggle = (index) => {
    if (Click === index) return setClick(null);
    setClick(index);
  };
  return (
    <>
      <CardNotStudent>
        <TextCardNotStudent>
          In this Section, you will be able to view your teachers feedback of
          the lessons you have had
        </TextCardNotStudent>
      </CardNotStudent>
      {/* {[1, 2].map((item, index) => (
        <>
          <Card>
            <Col>
              <ContentHeader>
                <Img src="https://res.cloudinary.com/ingenio/image/upload/v1629581169/edvlxyv5mlmz8tm9ftsh.png" />
                <HeaderName>Libary</HeaderName>
                <DataHeader>20-12-2021</DataHeader>
              </ContentHeader>
              <Separador />
              <ContentBody>
                <Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facilis, rem tenetur. Alias exercitationem laborum id nemo
                  voluptas unde cupiditate autem vitae, animi libero, quos
                  corporis doloremque. Voluptatem doloremque itaque cum!
                </Text>
              </ContentBody>
              <Separador />
              <ContentComments onClick={() => toggle(index)}>
                <TitleComments>Feedback</TitleComments>
                <ButtonIcon rotate={Click === index ? true : false}>
                  <BiChevronUp />
                </ButtonIcon>
              </ContentComments>
            </Col>
            {Click === index ? (
              <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,
                nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, quo.
              </Text>
            ) : null}
          </Card>
        </>
      ))} */}
    </>
  );
}
const Textmd = css`
  font-size: 1rem;
  font-weight: 500;
`;
const CardNotStudent = styled.div`
  padding: 1rem;
  border: 1px solid silver;
  background: #fff;
  border-radius: 10px;
  max-height: 66px;
  background-color: #f0fdf4;
`;

const TextCardNotStudent = styled.p`
  color: rgb(113, 113, 122);
  line-height: 1;
  letter-spacing: -0.2px;
  position: relative;
  margin-left: 5px;
  margin: 0;
`;
const Card = styled.div`
  position: relative;
  padding: 0.8rem;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid silver;
  margin-bottom: 10px;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContentHeader = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
`;
const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
const HeaderName = styled.span`
  color: rgb(24, 24, 27);
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 0.5rem;
`;
const DataHeader = styled.span`
  position: absolute;
  font-weight: 700;
  font-family: sans-serif;
  letter-spacing: 1.5px;
  font-size: 0.8rem;
  color: rgb(113, 113, 122);
  top: 0;
  right: 0;
`;
const ContentBody = styled.div``;
const Text = styled.p`
  ${Textmd};
  line-height: 1.2;
  margin: 0;
`;

const Separador = styled.hr`
  margin: 8px 0;
`;
const ContentComments = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1;
`;

const TitleComments = styled.span`
  color: rgb(113, 113, 122);
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;
const ButtonIcon = styled.button`
  font-size: 1.5rem;
  border-radius: 50%;
  border: none;
  height: 1em;
  height: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: 0.5s;
  transform: ${(props) => (props.rotate ? "" : "rotate(180deg)")};
  :focus {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
