import { DropDownsStyle, TextSpan } from "./Styles";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import styled from "styled-components";
export const DropDowns = ({ level, active, id, click }) => {
  return (
    <DropDownsStyle>
      {active ? (
        <IconMinus onClick={() => click(id)} />
      ) : (
        <IconPlus onClick={() => click(id)} />
      )}
      <TextSpan>{level}</TextSpan>
    </DropDownsStyle>
  );
};

const IconPlus = styled(AiOutlinePlus)`
  height: 30px;
  width: 30px;
  padding: 0.2rem;
  :hover {
    cursor: pointer;
    background-color: #e5e7eb;
    color: #27272a;
    border-radius: 50%;
  }
`;
const IconMinus = styled(BiMinus)`
  height: 30px;
  width: 30px;
  padding: 0.2rem;
  :hover {
    cursor: pointer;
    background-color: #e5e7eb;
    border-radius: 50%;
    color: #27272a;
  }
`;
