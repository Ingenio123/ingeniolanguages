import styled, { css } from "styled-components";
import { BiCalendarWeek, BiChevronDown } from "react-icons/bi";
import { useState } from "react";

export default function CardFeedBack({ Summary }, props) {
  const [Click, setClick] = useState(false);
  const [ClickToggle, setToggle] = useState(false);
  const SubToggle = (index) => {
    if (Click === index) return setClick(null);
    setClick(index);
  };
  const Toggle = (index) => {
    if (ClickToggle === index) return setToggle(null);
    setToggle(index);
  };
  return (
    <>
      {/* <CardNotStudent>
        <TextCardNotStudent>
          In this Section, you will be able to view your teachers feedback of
          the lessons you have had
        </TextCardNotStudent>
      </CardNotStudent> */}
      <ContentFeddBack>
        {Summary &&
          Summary.map((item, index) => (
            <Card key={index}>
              <ContentHeader>
                <ContentTeacher>
                  <img src={item.teacher.picture} alt="imge teacher" />
                  <Text>
                    <h3>Teacher</h3>
                    <h2>{item.teacher.email || item.teacher.name}</h2>
                  </Text>
                </ContentTeacher>
                <Fecha>
                  <div>
                    <Icon style={{ marginRight: ".5rem" }} />
                    <span> 1/12/2022</span>
                  </div>
                  <IconArrowHeader
                    bottom={true}
                    giro={ClickToggle === index ? true : false}
                    onClick={() => Toggle(index)}
                  />
                </Fecha>
              </ContentHeader>
              {ClickToggle === index && (
                <>
                  <Acordion onClick={() => SubToggle(index)}>
                    <div className="content">
                      <span className="text">Class Summary</span>
                      <IconArrow />
                    </div>
                    {Click === index && (
                      <div className="content_two">
                        <hr />
                        <p>{item.content.classSummary}</p>
                      </div>
                    )}
                  </Acordion>
                  <Acordion onClick={() => SubToggle(index + 1)}>
                    <div className="content">
                      <span className="text">Comments </span>
                      <IconArrow />
                    </div>
                    {Click === index + 1 && (
                      <div className="content_two">
                        <hr />
                        <p>{item.content.comments}</p>
                      </div>
                    )}
                  </Acordion>
                </>
              )}
            </Card>
          ))}
        <Card>
          <ContentHeader>
            <ContentTeacher>
              <img
                src="https://res.cloudinary.com/ingenio/image/upload/v1622676035/ss00syeesa1gowaquynf.png"
                alt="imge teacher"
              />
              <Text>
                <h3>Teacher</h3>
                <h2>Milena S</h2>
              </Text>
            </ContentTeacher>
            <Fecha>
              <div>
                <Icon style={{ marginRight: ".5rem" }} />
                <span> 1/12/2022</span>
              </div>
              <IconArrowHeader
                bottom={true}
                giro={ClickToggle === 2 ? true : false}
                onClick={() => Toggle(2)}
              />
            </Fecha>
          </ContentHeader>
          {ClickToggle === 2 && (
            <>
              <Acordion onClick={() => SubToggle(3)}>
                <div className="content">
                  <span className="text">Class Summary</span>
                  <IconArrow />
                </div>
                {Click === 3 && (
                  <div className="content_two">
                    <hr />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa quia beatae illum eos aperiam modi mollitia et, eius
                      magni similique.
                    </p>
                  </div>
                )}
              </Acordion>
              <Acordion onClick={() => SubToggle(4)}>
                <div className="content">
                  <span className="text">Comments </span>
                  <IconArrow />
                </div>
                {Click === 4 && (
                  <div className="content_two">
                    <hr />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa quia beatae illum eos aperiam modi mollitia et, eius
                      magni similique.
                    </p>
                  </div>
                )}
              </Acordion>
            </>
          )}
        </Card>
      </ContentFeddBack>
    </>
  );
}

const IconHeader = styled(BiChevronDown)`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 2rem;
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
const ContentFeddBack = styled.article`
  width: 500px;
  padding: 0 1rem;
`;
const Card = styled.section`
  width: 100%;
  padding: 1rem !important;
  background-color: #fafafa;
  border-radius: 8px;
  border: 1px solid silver;
  margin: 0;
  margin-bottom: 0.3rem;
`;
const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
const ContentTeacher = styled.div`
  display: flex;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  /* margin-bottom: 1rem; */
`;
const Fecha = styled.div`
  position: relative;
  font-size: 1rem;
  color: #a1a1aa;

  div {
    position: relative;
    height: 20px;
    display: flex;
    align-items: center;
    span {
      line-height: 0;
      align-self: flex-end;
      letter-spacing: 1px;
    }
  }
`;

const Icon = styled(BiCalendarWeek)`
  position: absolute;
  left: -20px;
  top: 10px;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 10px;
  h3 {
    color: red;
    margin: 0;
    font-size: 1rem;
    line-height: normal;
  }
  h2 {
    color: #314584;
    margin: 0;
    font-size: 1.3rem;
    letter-spacing: -1px;
    line-height: normal;
    font-weight: 600;
  }
`;
const Acordion = styled.div`
  width: 100%;
  border: 2px solid #3b82f6;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  color: #a1a1aa;
  margin-bottom: 1rem;
  .content {
    display: flex;
    justify-content: space-between;
  }
  .content_two {
    hr {
      border-top: 1px solid #c4c4c4;
      margin: 1rem 0;
    }
    p {
      line-height: normal;
    }
  }
  .text {
    font-size: 1rem;
  }
  transition: all 0.3s ease;
  :hover {
    color: #6e6e74;
    cursor: pointer;
  }
`;
const IconArrow = styled(BiChevronDown)`
  font-size: 1.5rem;
`;

const IconArrowHeader = styled(BiChevronDown)`
  font-size: 2rem;
  position: absolute;
  bottom: -10px;
  right: 15px;
  transition: all 0.3s ease;
  transform: ${(props) => props.giro && "rotate(0.5turn)"};
  :hover {
    cursor: pointer;
    color: #6e6e74;
  }
`;
