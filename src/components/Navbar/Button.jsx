import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ primary }) => (primary ? "#ff3946" : "blue")};
  otline: none;
  border: none;
  cursor: ${(props) => (props.disabled ? " " : "pointer")};
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "2px 1rem" : "14px 2px")};
  color: ${({ primary }) => (primary ? "#fff" : "black")};
  &:hover {
    color: white;
    transform: ${(props) => (props.disabled ? " " : "translateY(-5px)")};
    /* transform: translateY(-5px); */
  }
`;
