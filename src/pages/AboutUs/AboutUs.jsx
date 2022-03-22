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
      <TextIntroduction>
        Ingenio Languages was founded in 2017 in Santo Domingo, Ecuador. It is
        the #1 online language school in all of Ecuador. At Ingenio Languages,
        we believe that passion and flexibility are the key for those who
        struggle learning a language. If a student is motivated, it is more
        likely for him/her to enjoy learning a new language. We like to include
        cultural aspects that will enhance the learning process. When students
        learn interesting facts about the cultures of those places where Spanish
        is spoken, they engage more and therefore, they learn more. We also like
        to keep our lesson packages flexible. That means that students can
        always choose their number of lessons per month, the teachers they want
        to learn with, the length of the lesson, and the days and times they
        want to dedicate to learning.
      </TextIntroduction>
      <TextIntroduction>
        At Ingenio Languages, we have our own unique curriculum. It is designed
        to make communication in the language easier. Our curriculum includes
        the explanations, exercises to practice, videos, songs, and at the end
        of each level, they will be able to be assessed in order to check if
        they have achieved their target level. When a student creates an account
        on our website, they will be able to track their progress, their level
        (CEFR), the lesson summaries with feedback from teachers, materials,
        etc. For our learning methodology, we focus on the communicative
        approach, without forgetting that language aspects such as grammar,
        vocabulary and other skills such as reading and writing, are great tools
        to develop faster in communication. We teach grammar, but we do it in a
        fun and easy way! Also, if there are any students interested in learning
        a language in a specific field like medical, tourism, business, etc., we
        have customized programs for them.
      </TextIntroduction>
      <TextTittle>Our Founders</TextTittle>
      <ContentGrid>
        <ImagePerson url="https://res.cloudinary.com/ingenio/image/upload/v1647714711/Wilson_nuevo_2_1_r8opzn.png" />
        <TextAbout text="Wilson Cisneros is a passionate educator and motivator. He is the head director at Ingenio Online and Ingenio Languages. He holds a degree in Education Administration from a very well-known university in Quito, Ecuador, and is currently finishing a Master’s degree in technologies and innovation in education from a prestigious university in Azogues, Ecuador. Wilson has more than ten years of experience in the education field. He has worked with many public institutions in the education area in Ecuador. He has given training to teachers in the public schools and he’s always promoting the innovation in education. Wilson is also a very experienced sign language interpreter, and he has worked with the deaf community in Ecuador for many years. He’s specialized in classroom inclusion for students with disabilities. Wilson is currently the Head director at Ingenio Languages." />
      </ContentGrid>
      <ContentGridtwo>
        <TextAbout text="Libary Manjarres is an expert educator with more than ten years of experience teaching Spanish, English, and French. She holds a modern languages degree from a prestigious university in Cartagena, Colombia. She has also taken liberal arts and education courses abroad in New York, USA. Libary also holds a Master’s degree in translation and technologies from a university in Barcelona, Spain. She loves to work with the technological field and is always eager to include innovative materials in her lessons, and share them with the teachers at Ingenio Languages. Libary is very passionate about language teaching, and she also loves arts. She enjoys writing short stories and novels, and is soon going to start a Master’s in Creative writing. Libary is currently the academic coordinator at Ingenio Languages. She manages the curriculum, students’ progress, and the teachers’ development." />
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
  margin: 3rem 0 1.5rem 0;
  font-family: "Sacramento", cursive;
  font-size: 3.5rem;
  font-weight: bold;
`;

const TextIntroduction = styled.p`
  color: #18181b;
  line-height: 1.4;
  font-size: 1.2rem;
  margin-left: 1rem;
  text-align: justify;
  width: 950px;
`;
