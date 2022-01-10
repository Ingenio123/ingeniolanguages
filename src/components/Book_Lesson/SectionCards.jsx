import styled from "styled-components";
import PropsTypes from "prop-types";
const SectionCards = ({
  image_url,
  idiom,
  name_teacher,
  eslogan,
  clickModal,
  calendar,
}) => (
  <ContentCards>
    <Img src={image_url} alt={idiom} />
    <ContenTextTeacher>
      <NombreTeacher>{name_teacher}</NombreTeacher>
      <TextTeacher>{eslogan}</TextTeacher>
      <ContentButton>
        <ButtonAgendarClass onClick={() => clickModal({ calendar })}>
          Book a lesson with me
        </ButtonAgendarClass>
      </ContentButton>
    </ContenTextTeacher>
  </ContentCards>
);

SectionCards.propTypes = {
  image_url: PropsTypes.string,
  idiom: PropsTypes.string,
  name_teacher: PropsTypes.string,
  eslogan: PropsTypes.string.isRequired,
};
SectionCards.defaultProps = {
  image_url:
    "https://cdn.pixabay.com/photo/2021/10/04/11/20/cosmos-6680031_960_720.jpg",
  idiom: "idom",
  name_teacher: "Name",
  eslogan:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit asperiores laborum ratione corrupti laboriosam explicabo incidunt rerum magnam, in iusto aliquam unde autem recusandae totam harum quasi cumque facere veritatis?",
};

export default SectionCards;

const ContentCards = styled.div`
  width: 100%;
  display: flex;
  background-color: #fff;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;

  box-shadow: 0px 7px 15px -1px rgba(0, 0, 0, 0.18);
  -webkit-box-shadow: 0px 7px 15px -1px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: 0px 7px 15px -1px rgba(0, 0, 0, 0.18);
  @media screen and (max-width: 768px) {
    background-color: gray;
  }
`;
const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
const ContenTextTeacher = styled.div`
  margin: 0;
  margin-left: 0.5rem;
  margin-top: auto;
  width: 100%;
`;
const NombreTeacher = styled.span`
  font-size: 1.5rem;
  color: rgb(82, 82, 82);
  align-self: center;
  margin: 0;
  width: 100%;
`;
const TextTeacher = styled.p`
  margin: 0;
  color: rgb(113, 113, 122);
  line-height: 1.2;
  margin-bottom: 0.5rem;
`;
const ContentButton = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: auto;
  /* border: 1px solid red; */
`;

const ButtonAgendarClass = styled.button`
  background: rgb(79, 70, 229);
  color: #fff;
  border: none;
  outline: none;
  padding: 0.2rem 1rem;
  font-size: 1rem;
  border-radius: 4px;
  margin-top: auto;
  :hover {
    background-color: rgb(67, 56, 202);
    cursor: pointer !important;
  }
`;
