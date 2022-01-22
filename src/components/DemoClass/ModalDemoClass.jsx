import styled from "styled-components";
import { BiX } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";

import contextUser from "../Context/UserContext";

export default function ModalDemoClass({
  children,
  mostrarModal,
  modificadorModal,
  title,
  FirstName,
  Email,
  addData,
}) {
  const closeModal = () => {
    modificadorModal(!mostrarModal);
  };

  const userContext = useContext(contextUser);
  const [DataUser, setDataUser] = useState(null);

  useEffect(() => {
    setDataUser(userContext.InformUser);
  }, [userContext.InformUser]);

  return (
    <>
      {mostrarModal && (
        <ModalFondo>
          <CardFormDemo>
            <HeaderModal>
              <HeaderModalText>{title}</HeaderModalText>
              <IconClose onClick={closeModal} />
            </HeaderModal>
            {addData > 0 && (
              <BoxGrid>
                {FirstName && (
                  <ContentText>
                    <Label>Name</Label>
                    <TextUser>{FirstName}</TextUser>
                  </ContentText>
                )}
                <ContentText>
                  <Label>Email</Label>
                  <TextUser>{Email}</TextUser>
                </ContentText>
              </BoxGrid>
            )}
            {children}
          </CardFormDemo>
        </ModalFondo>
      )}
    </>
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
  z-index: 9;
`;

const CardFormDemo = styled.div`
  background-color: #ffff;
  width: 50%;
  padding: 0 1rem;
  border-radius: 5px;
  height: 50%;
`;
const HeaderModal = styled.div`
  border-bottom: 1px solid #d4d4d8;
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: space-between;
`;
const HeaderModalText = styled.h2`
  color: #314584;
  margin: 0;
  font-size: 1.5rem;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
const IconClose = styled(BiX)`
  color: #1a1a1a;
  font-size: 1.5rem;
  :hover {
    cursor: pointer;
  }
`;

const BoxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
`;
const Label = styled.label`
  font-size: 1rem;
  line-height: normal;
  color: #52525b;
`;
const TextUser = styled.span`
  font-size: 1rem;
`;
