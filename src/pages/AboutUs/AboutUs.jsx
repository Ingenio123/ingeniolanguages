import { TextAbout } from "../../components/AboutUs/TextAbout";
import styled from "styled-components";
import { ImagePerson } from "../../components/AboutUs/ImagePerson";
import { useEffect } from "react";
export default function AboutUs(props) {
  useEffect(() => {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <Container className="container">
      <TextTittle>About Us</TextTittle>
      <ContentGrid>
        <ImagePerson url="https://res.cloudinary.com/ingenio/image/upload/v1647714711/Wilson_nuevo_2_1_r8opzn.png" />
        <TextAbout />
      </ContentGrid>
      <ContentGridtwo>
        <TextAbout />
        <ImagePerson url="https://res.cloudinary.com/ingenio/image/upload/v1647718030/Libary_342_x_413_d9myrn.png" />
      </ContentGridtwo>
    </Container>
  );
}

const ContentGrid = styled.main`
  display: grid;
  grid-template-columns: 260px 600px;
  margin-top: 1rem;
`;

const ContentGridtwo = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 600px 200px;
`;
const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextTittle = styled.h2`
  margin: 0;
  margin-top: 3rem;
  font-family: "Sacramento", cursive;
  font-size: 3.5rem;
  font-weight: bold;
`;
