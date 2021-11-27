import PropType from "prop-types";
import styled from "styled-components";
const BookLessonTitle = ({ text, idiom, textend }) => (
  <ComponentTitle>
    <TextTitle>
      {text} {idiom} {textend}
    </TextTitle>
    <Line />
  </ComponentTitle>
);
export default BookLessonTitle;

BookLessonTitle.propTypes = {
  text: PropType.string,
  idiom: PropType.string,
  textend: PropType.string,
};
BookLessonTitle.defaultProps = {
  text: "no se encontro param  props -> text",
  idiom: "No se encontro idiom",
  textend: "no se encontro el props -> textend",
};

const ComponentTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const TextTitle = styled.h2`
  font-size: 2rem;
  color: #18181b;
  line-height: 1;
  margin: 0;
  font-weight: 600;
`;
const Line = styled.hr`
  width: 80%;
  color: #52525b;
`;
