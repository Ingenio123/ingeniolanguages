import styled from "styled-components";
import { Link } from "react-router-dom";

export const ToolTip = styled.div`
  opacity: 0;
  position: absolute;
  top: 20%;
  right: -20px;
  background-color: #52525b;
  color: #fff;
  border-radius: 0.2rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: normal;
  box-shadow: -1px 3px 5px 0px rgba(0, 0, 0, 0.3);
`;

export const ListIcons = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 2rem;
  /* border: 1px solid green; */
`;
export const Container = styled.main``;
export const BoxIcon = styled(Link)`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 0.5rem;
  color: #1d4ed8;
  :hover {
    color: #1d4ed8 !important;
    cursor: pointer;
    background: transparent !important;
  }
  :focus {
    color: #16a34a;
  }
`;
export const Text = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
  line-height: normal;
  letter-spacing: -1px;
`;
export const ContentIcons = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
  & ${BoxIcon}:hover + ${ToolTip} {
    opacity: 1;
  }
`;
export const DropDownsStyle = styled.div`
  width: 60px;
  color: #71717a;
  display: flex;
  align-items: center;
  /* border: 1px solid red; */
  justify-content: space-between;
  /* border: 1px solid black; */
  :hover {
    color: #27272a !important;
  }
`;
export const TextH3 = styled.h3`
  border-bottom: 1px solid silver;
`;
export const TextSpan = styled.span`
  font-size: 1.2rem;
  line-height: normal;
`;
export const Divider = styled.hr`
  margin: 0;
  margin: 1rem 0;
`;

export const Title = styled.h2`
  font-size: 2.8rem;
  font-family: "Sacramento", cursive;
  text-align: center;
  font-weight: 600;
  margin: 0;
  margin: 1rem 0;
`;

export const BoxTextMaterials = styled.div`
  padding: 1rem;
  background-color: #e4e4e7;
  border-radius: 0.5rem;
  p {
    line-height: normal;
  }
`;
