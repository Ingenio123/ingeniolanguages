import ReviewImage from "../../assets/images/svgs/IconReview.svg";
import styled from "styled-components";
export default function ReviewClass() {
  return <BoxImage></BoxImage>;
}

const BoxImage = styled.div`
  width: 100%;
  height: 70%;
  background-image: url(${ReviewImage});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
