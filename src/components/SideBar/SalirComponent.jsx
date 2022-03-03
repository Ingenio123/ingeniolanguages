import styled from "styled-components";
import { BiLogOut } from "react-icons/bi";
const SalirComponent = (props) => {
  return (
    <CardSalir
      onClick={() => {
        props.logout();
        props.clickCard();
      }}
    >
      <Text>Sign out</Text>
      <Icon />
    </CardSalir>
  );
};

export default SalirComponent;
const CardSalir = styled.div`
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

const Icon = styled(BiLogOut)`
  font-size: 1.4rem;
`;
