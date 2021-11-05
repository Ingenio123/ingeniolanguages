import styled from "styled-components";

export default function ModalDemoClass() {
  return (
    <ModalFondo>
      <CardFormDemo></CardFormDemo>
    </ModalFondo>
  );
}

const ModalFondo = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardFormDemo = styled.div`
  background-color: #ffff;
  width: 50%;
`;
