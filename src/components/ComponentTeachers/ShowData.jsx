import styled from "styled-components";
import { useState } from "react";

export const ShowData = (props) => {
  const { data } = props;
  const [dataIdiom, setDataIdiom] = useState();

  const DatosFilterNormal = (idiom, kids) => {
    if (!kids) kids = false;

    const valor = data.filter(
      (elem) => elem.idiom === idiom && elem.kids === false
    );
    console.log(valor);
    setDataIdiom(valor);
    return valor;
  };
  const DatosFilterKids = (idiom, kids) => {
    if (!kids) kids = false;
    const valorKids = data.filter(
      (elem) => elem.idiom === idiom && elem.kids === true
    );
    console.log(valorKids);
    setDataIdiom(valorKids);
    return valorKids;
  };

  return (
    <>
      <Text>
        <Textbold> Language:</Textbold> {dataIdiom.idiom}
      </Text>
      <Text>
        <Textbold>Number of months: </Textbold> 2 months
        {/* {data[0].months > 1
          ? data[0].months + " months"
          : data[0].months + " month"} */}
      </Text>
      <Text>
        <Textbold>Duration of each lesson: </Textbold>
        {/* {data[0].time} minutes */}
      </Text>
      <Text>
        <Textbold>Active plan: 6 </Textbold> lessons
        {/* {data[0].lesson} */}
      </Text>
      <Text>
        <Textbold>Remaining lessons: </Textbold>6 lessons
        {/* {data[0].lessonTotal} lessons */}
      </Text>
    </>
  );
};

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
