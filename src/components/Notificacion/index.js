import styled from "styled-components";

function NotificacionComponent({ children }) {
  return <NotificacionContent>{children}</NotificacionContent>;
}

export default NotificacionComponent;

const NotificacionContent = styled.div`
  max-width: 968px;
  width: 968px;
  height: 100vh;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  border: 1px solir #0000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
