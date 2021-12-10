// import {}  from 'react'
import styled from "styled-components";
import { BiPencil } from "react-icons/bi";
const EditComponent = () => {
  return (
    <CardEdit>
      <Text>Edita tus datos</Text>
      <Icon />
    </CardEdit>
  );
};

export default EditComponent;

const CardEdit = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  border-top: 2px solid silver;

  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #71717a;
  :hover {
    cursor: pointer;
    color: #314584;
  }
`;
const Text = styled.span`
  font-size: 1.2rem;

  line-height: normal;
  letter-spacing: 0;
  font-weight: 600;
`;

const Icon = styled(BiPencil)`
  font-size: 1.4rem;
`;
