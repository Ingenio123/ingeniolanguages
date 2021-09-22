import styled from "styled-components";

export default function LayoutFree(props) {
  return <Content>{props.children}</Content>;
}

const Content = styled.section`
  height: 50vh;
  background-color: #cee5d0;
`;
