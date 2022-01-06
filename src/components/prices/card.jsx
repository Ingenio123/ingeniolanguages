import styled from "styled-components";
const Card = (props) => {
  const hanldeClick = () => {
    props.setClickModal(true);
    props.setData({
      idiom: props.idiom,
      imgUrl: props.imgUrl,
    });
  };
  return (
    <Cards img={props.imgUrl} onClick={hanldeClick}>
      <h2>{props.idiom}</h2>
    </Cards>
  );
};
const Cards = styled.div`
  /* border: 1px solid red; */
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  border-radius: 0.5rem;
  // flex
  /* display: flex;
  justify-content: center; */
  height: 250px;
  /* padding: 1rem 0 0 0; */
  :hover {
    cursor: pointer;
  }
  h2 {
    margin: 0;
    background-color: rgba(255, 255, 255, 0.5);
    text-align: center;
    padding: 0.5rem 0;
  }
`;

export default Card;
