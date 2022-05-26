import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
const ComponentsButtonsRenews = ({ handleClickPackage }) => {
  return (
    <CardExpired>
      <ButtonStyled bg="#ff3946" onClick={handleClickPackage}>
        Renew my current lessons package
      </ButtonStyled>
      <TextOr>or</TextOr>
      <LinkText to="/prices">Change my current lessons package</LinkText>
    </CardExpired>
  );
};
export default ComponentsButtonsRenews;

const TextOr = styled.span`
  font-size: 1rem;
  color: #364d92;
  font-weight: 700;
`;

const CardExpired = styled.section`
  /* border: 1px solid black; */
  padding: 0 0.5rem;
  width: 100%;
  height: auto;
  color: #fff;
  font-size: 1rem;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;
const Button = css`
  border-radius: 30px;
  font-weight: 700;
  color: inherit;
  background-color: ${(props) => (props.bg ? props.bg : "#4299e1")};
  padding: 0.5rem 1rem;
  line-height: 26px;
  display: inline-block;
  max-width: 350px;
  border: 3px solid #ff3946;
`;

const ButtonStyled = styled.button`
  ${Button};
  transition: all 0.3s ease;

  :hover {
    background-color: transparent;
    border: 3px solid #ff3946;
    color: #364d92;
  }
`;

const LinkText = styled(Link)`
  font-size: 1rem;
  color: #364d92;
  opacity: 1;
  font-weight: 700;
  :hover {
    color: #ff3946;
  }
`;
