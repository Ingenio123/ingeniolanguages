import styled, { keyframes } from "styled-components";
import { FiClock } from "react-icons/fi";
import { BiCalendarWeek, BiChevronDown, BiX } from "react-icons/bi";
import { useState } from "react";
import useFeedback from "../../../hooks/useFeedback";

function RenderDate(date) {
  let day;
  const dates = new Date(date);
  day = dates.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  var month = dates.getMonth() + 1;
  const year = dates.getFullYear();
  return month + "/" + day + "/" + year;
}

export default function CardFeedBack(
  { Summary, loading, ItIsEmpty, isStudent, idiom, kids, deleteProps },
  props
) {
  const { verify } = useFeedback();
  const [Click, setClick] = useState(false);
  const [ClickToggle, setToggle] = useState(false);

  //
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
      <ContentFeddBack>
        {loading ? (
          <CardSkeleton>
            <div className="content--flex">
              <div className="avatar"></div>
              <div className="text">
                <div className="text__teacher"></div>
                <div className="text__name"></div>
              </div>
            </div>
            <div className="contenttwo">
              <div className="date"></div>
            </div>
          </CardSkeleton>
        ) : (
          <>
            {ItIsEmpty ? (
              <>
                {isStudent ? (
                  <>
                    <TextFeedback>Summary of lessons {idiom}</TextFeedback>

                    <CardItIsEmpty>
                      <TextCardNotStudent>
                        The summaries of your lessons haven't been submitted
                        yet.
                      </TextCardNotStudent>
                    </CardItIsEmpty>
                  </>
                ) : (
                  <CardNotStudent>
                    <TextCardNotStudent>
                      In this Section, you will be able to view your teachers
                      feedback of the lessons you have h ad
                    </TextCardNotStudent>
                  </CardNotStudent>
                )}
              </>
            ) : (
              <>
                <TextFeedback>
                  Summary of lessons {idiom} {kids && "(kids)"}
                </TextFeedback>
                {Summary && (
                  <>
                    {Summary.map((item, index) => (
                      <CardContentSection>
                        {verify(item.id_Teacher._id) ? (
                          <ButtonDelete onClick={() => deleteProps(item._id)}>
                            <BiX />
                          </ButtonDelete>
                        ) : null}

                        <Card key={index}>
                          <ContentHeader>
                            <ContentTeacher>
                              <img
                                src={item.id_Teacher.picture}
                                alt="imge teacher"
                              />
                              <Text>
                                <h3>Teacher</h3>
                                {/* <h2>{item.teacher.email || item.Teacher.name}</h2> */}
                                <h2>
                                  {item.id_Teacher.FirstName || " name teacher"}{" "}
                                </h2>
                              </Text>
                            </ContentTeacher>
                            <Fecha>
                              <BoxInformationDate>
                                <IconClock style={{ marginRight: ".3rem" }} />
                                <span className="text__bold">
                                  {item.content.timeLesson} min
                                </span>
                                <Icon style={{ marginRight: ".3rem" }} />
                                <span>
                                  {RenderDate(item.content.date) ||
                                    "01/02/2022"}
                                </span>
                              </BoxInformationDate>
                              <ViewClassSummary onClick={() => Toggle(index)}>
                                <span>view class summary</span>
                                <IconArrowHeader
                                  bottom={true}
                                  giro={ClickToggle === index ? true : false}
                                />
                              </ViewClassSummary>
                            </Fecha>
                          </ContentHeader>
                          {ClickToggle === index && (
                            <>
                              <Acordion>
                                <div
                                  className="content"
                                  onClick={() => SubToggle(index)}
                                >
                                  <span className="text">Class Summary</span>
                                </div>
                                <div className="content_two">
                                  <hr />
                                  <p>{item.content.classSummary}</p>
                                </div>
                              </Acordion>
                              <Acordion>
                                <div className="content">
                                  <span className="text">Comments </span>
                                </div>
                                <div className="content_two">
                                  <hr />
                                  <p>{item.content.comments}</p>
                                </div>
                              </Acordion>
                            </>
                          )}
                        </Card>
                      </CardContentSection>
                    ))}
                  </>
                )}
                {/* <Line>view more </Line> */}
              </>
            )}
          </>
        )}
      </ContentFeddBack>
    </>
  );
}

const BoxInformationDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;

  overflow: hidden;
`;

const CardItIsEmpty = styled.div`
  padding: 1rem;
  border: 1px solid silver;
  background: #fff;
  border-radius: 10px;
  max-height: 66px;
  background-color: #f0fdf4;
`;

const Icon = styled(BiCalendarWeek)`
  line-height: 0;
  font-size: 1.2rem;
`;
const IconClock = styled(FiClock)`
  line-height: 0;
  font-size: 1.2rem;
`;
const ViewClassSummary = styled.div`
  font-size: 2rem;
  line-height: 0;

  :hover {
    color: #6e6e74;
    cursor: pointer;
  }
`;

const IconArrowHeader = styled(BiChevronDown)`
  transition: all 0.3s ease;
  transform: ${(props) => props.giro && "rotate(0.5turn)"};
  font-size: 1.8rem;
  :hover {
    color: #6e6e74;
  }
`;

const Fecha = styled.div`
  position: relative;
  color: #71717a;
  display: flex;
  flex-direction: column;
  align-items: end;
  span {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
    &.text__bold {
      font-weight: 700;
    }
  }
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #6e6d7a;
  font-size: 1rem;

  ::before {
    margin-right: 1rem;
    content: "";
    flex: 1;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }
  ::after {
    margin-left: 1rem;
    content: "";
    flex: 1;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

const TextFeedback = styled.h2`
  margin: 0;
  margin-bottom: 1rem;
  /* margin-top: 2rem; */
  text-align: center;
`;

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
  padding: 0 1rem;
  max-height: calc(100vh - 150px);
  overflow: auto;
  /* margin: auto 0; */

  margin-top: 2.5rem;
`;
const CardContentSection = styled.section`
  margin-top: 0 !important;
  padding: 0.5rem !important;
  /* border: 1px solid red; */
  position: relative;
`;
const ButtonDelete = styled.button`
  background-color: #ef4444;
  color: #fff;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

const Card = styled.div`
  width: 100%;
  padding: 0.5rem !important;
  background-color: #fafafa;
  border-radius: 8px;
  border: 1px solid #e4e4e7;
  margin-top: 0 !important;
`;
const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;
const ContentTeacher = styled.div`
  display: flex;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  /* margin-bottom: 1rem; */
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 10px;
  h3 {
    color: red;
    margin: 0;
    font-size: 0.95rem;
    line-height: normal;
  }
  h2 {
    color: #314584;
    margin: 0;
    font-size: 1.25rem;
    letter-spacing: -1px;
    line-height: normal;
    font-weight: 600;
  }
`;
const Acordion = styled.div`
  width: 100%;
  color: #52525b;
  font-weight: 700;
  .content {
    display: flex;
    justify-content: space-between;
  }
  .content_two {
    hr {
      border-top: 1px solid #c4c4c4;
      margin: 0 0 0.4rem 0;
    }
    p {
      line-height: normal;
      margin: 0;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
  }
  .text {
    font-size: 1rem;
  }
  transition: all 0.3s ease;
`;
const IconArrow = styled(BiChevronDown)`
  font-size: 1.5rem;
`;

const shimmer = keyframes`
  100% {
      transform: translateX(100%);
    }
`;

const CardSkeleton = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  padding: 1rem;
  background-color: #a1a1aa;
  border-radius: 0.5rem;
  margin: 0;
  margin-bottom: 0.3rem;
  .content {
    border: 1px solid blue;
    &--flex {
      display: flex;
    }
  }
  .avatar {
    height: 50px;
    width: 50px;
    background-color: #b3b3b3;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.3) 0,
        rgba(255, 255, 255, 0.5) 20%,
        rgba(255, 255, 255, 0.1) 60%,
        rgba(255, 255, 255, 0.6)
      );
      animation-name: ${shimmer};
      animation-duration: 0.8s;
      animation-iteration-count: infinite;
      content: "";
    }
  }
  .text {
    &__teacher {
      margin: 0;
      margin-left: 0.3rem;
      position: absolute;
      top: 40px;
      width: 70px;
      height: 15px;
      background-color: #b3b3b3;
      position: relative;
      overflow: hidden;
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        background-image: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.3) 0,
          rgba(255, 255, 255, 0.5) 20%,
          rgba(255, 255, 255, 0.1) 60%,
          rgba(255, 255, 255, 0.6)
        );
        animation-name: ${shimmer};
        animation-duration: 0.8s;
        animation-iteration-count: infinite;
        content: "";
      }
    }
    &__name {
      margin: 0;
      margin-left: 0.3rem;
      margin-right: 1rem;
      width: 150px;
      height: 15px;
      background-color: #b3b3b3;
      position: relative;
      overflow: hidden;
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        background-image: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.3) 0,
          rgba(255, 255, 255, 0.5) 20%,
          rgba(255, 255, 255, 0.1) 60%,
          rgba(255, 255, 255, 0.6)
        );
        animation-name: ${shimmer};
        animation-duration: 0.8s;
        animation-iteration-count: infinite;
        content: "";
      }
    }
  }
  .contenttwo {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;

    .date {
      margin-top: 1rem;
      margin-right: 1rem;
      width: 100px;
      height: 20px;
      background-color: #b3b3b3;
      position: relative;
      overflow: hidden;
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        background-image: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.3) 0,
          rgba(255, 255, 255, 0.5) 20%,
          rgba(255, 255, 255, 0.1) 60%,
          rgba(255, 255, 255, 0.6)
        );
        animation-name: ${shimmer};
        animation-duration: 0.8s;
        animation-iteration-count: infinite;
        content: "";
      }
    }
  }
`;
// &::after {
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   transform: translateX(-100%);
//   background-image: linear-gradient(
//     90deg,
//     rgba(255,255,255, .3) 0,
//     rgba(255,255,255, .5) 20%,
//     rgba(255,255,255, .1) 60%,
//     rgba(255,255,255, .6)
//   );
//   animation-name: ${shimmer};
//   animation-duration: .8s;
//   animation-iteration-count: infinite;
//   content: '';

// {
//     Summary.map((item, index) => (
//       <Card key={index}>
//         <ContentHeader>
//           <ContentTeacher>
//             <img src={item.teacher.picture} alt="imge teacher" />
//             <Text>
//               <h3>Teacher</h3>
//               <h2>{item.teacher.email || item.teacher.name}</h2>
//             </Text>
//           </ContentTeacher>
//           <Fecha>
//             <div>
//               <Icon style={{ marginRight: ".5rem" }} />
//               <span> 1/12/2022</span>
//             </div>
//             <IconArrowHeader
//               bottom={true}
//               giro={ClickToggle === index ? true : false}
//               onClick={() => Toggle(index)}
//             />
//           </Fecha>
//         </ContentHeader>
//         {ClickToggle === index && (
//           <>
//             <Acordion onClick={() => SubToggle(index)}>
//               <div className="content">
//                 <span className="text">Class Summary</span>
//                 <IconArrow />
//               </div>
//               {Click === index && (
//                 <div className="content_two">
//                   <hr />
//                   <p>{item.content.classSummary}</p>
//                 </div>
//               )}
//             </Acordion>
//             <Acordion onClick={() => SubToggle(index + 1)}>
//               <div className="content">
//                 <span className="text">Comments </span>
//                 <IconArrow />
//               </div>
//               {Click === index + 1 && (
//                 <div className="content_two">
//                   <hr />
//                   <p>{item.content.comments}</p>
//                 </div>
//               )}
//             </Acordion>
//           </>
//         )}
//       </Card>
//     ));
// }
