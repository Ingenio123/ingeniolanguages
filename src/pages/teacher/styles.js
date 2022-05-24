import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContentGrid = styled.main`
  display: grid;
  grid-template-columns: 40% 1fr;
  /* border: 1px solid red; */
  column-gap: 1rem;
`;

export const SectionMaterials = styled.section`
  border: 1px solid green;
`;

export const Card = styled.div`
  /* margin: 1rem 0 0.5rem 0; */
  ${({ top }) => top && `margin-top: 2rem;`};
  margin-bottom: 0.45rem;
  border-bottom: 1px solid silver;
  margin-left: 4rem;
`;
export const TextLevel = styled.span`
  font-size: 1.2rem;
  line-height: normal;
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

export const SectionCard = styled.section`
  display: flex;
  width: 100%;
`;

export const ListIcons = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 2rem;
`;
export const BoxIcon = styled(Link)`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 0.5rem;
  color: #1d4ed8;
`;
export const Text = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
  line-height: normal;
  letter-spacing: -1px;
`;

export const ButtonDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffff;
  height: 18px;
  width: 18px;
  background-color: ${({ disabled }) => (disabled ? "#F87171" : "#ef4444")};
  border-radius: 50%;
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
  position: absolute;
  top: 0;
  right: 0;
  :hover {
    ${({ disabled }) => !disabled && `background-color: #DC2626`};
    ${({ disabled }) => !disabled && `cursor: pointer`};
  }
`;
