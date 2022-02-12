import styled from "styled-components";

export const ModalConfirm = ({ modal, children }) => {
  return (
    <>
      {modal && (
        <Modal>
          <Card>
            <Texto>Deseas enviar </Texto>
            <ContentFlex>{children}</ContentFlex>
          </Card>
        </Modal>
      )}
    </>
  );
};

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background-color: #fff;
  color: #2563eb;
  width: 500px;
  height: 300px;
  border-radius: 8px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;

const Texto = styled.h2`
  text-align: center;
  margin: 0;
  margin-bottom: 2rem;
  color: #737373;
  font-weight: 300;
`;

const ContentFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
