import { useState } from "react";
import styled from "styled-components";

export default function Index() {
  return (
    <Content>
      <Card img="https://i.pinimg.com/originals/34/fd/f2/34fdf2f7f94cfe8b28c5178a616b8563.jpg">
        <ContentCard></ContentCard>
      </Card>
      <Card img="https://i.pinimg.com/originals/34/fd/f2/34fdf2f7f94cfe8b28c5178a616b8563.jpg">
        <ContentCard></ContentCard>
      </Card>
      <Card img="https://i.pinimg.com/originals/34/fd/f2/34fdf2f7f94cfe8b28c5178a616b8563.jpg">
        <ContentCard></ContentCard>
      </Card>
    </Content>
  );
}

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 1rem;
  margin-bottom: 2rem;
`;
const Card = styled.div`
  position: relative;
  background-image: url(${(props) => props.img});
  background-size: cover;
  width: 200px;
  height: 200px;
`;
const ContentCard = styled.div`
  position: absolute;
`;
