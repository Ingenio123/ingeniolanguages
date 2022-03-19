import styled from "styled-components";

export const ImagePerson = (props, { url }) => {
  return <ImgBox src={props.url} alt="img" />;
};

const ImgPerson = styled.img`
  height: 350px;
`;

const ImgBox = styled.div`
  /* background: url(${(props) => props.src}) no-repeat top center; */
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* background-size: 100%; */
`;
